import {
  View,
  Image,
  ImageBackground,
  Text,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {TMovieData} from '@iDRIVE/services';
import {ViewStyle} from 'react-native/types';
import styles from './RandomMovieCard.styles';
import {Assets} from '@iDRIVE/assets';

type TRandomMovieCardProps = {
  loading?: boolean;
  value?: TMovieData;
  style?: ViewStyle;
  errorMessage?: string;
  handleViewMovie?: () => void;
};
const RandomMovieCardComponent = (props: TRandomMovieCardProps) => {
  const spinValue = new Animated.Value(0);
  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };
  useEffect(() => {
    if (props.loading) {
      spin();
    }
  }, [props.loading, props.value]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, props.style]}>
      {(!props.value || props.loading) && (
        <Animated.View style={{transform: [{rotate}]}}>
          <Image source={Assets.images.movieReel} style={styles.emptyImage} />
        </Animated.View>
      )}
      {props.errorMessage ? (
        <Text style={styles.movieText}>{props.errorMessage}</Text>
      ) : null}
      {props.value && !props.loading && (
        <Pressable style={styles.wrapper} onPress={props.handleViewMovie}>
          <ImageBackground
            source={
              props.value.Poster === 'N/A'
                ? Assets.images.noImage
                : {
                    uri: props.value.Poster,
                  }
            }
            style={styles.movieImage}>
            <Text style={styles.movieText}>
              {props.value.Title} - {props.value.Year}
            </Text>
          </ImageBackground>
        </Pressable>
      )}
    </View>
  );
};

export default RandomMovieCardComponent;
