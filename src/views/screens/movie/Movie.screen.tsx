import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@iDRIVE/navigation';
import {apiEndpoints, TMovieDetails} from '@iDRIVE/services';
import styles from './Movie.styles';
import {Assets} from '@iDRIVE/assets';

type TMovieScreenProps = NativeStackScreenProps<TRootStackParamList, 'Movie'>;

const MovieScreen = ({route, navigation}: TMovieScreenProps) => {
  const {imdbId} = route.params;
  const [movie, setMovie] = useState<TMovieDetails>();

  useEffect(() => {
    apiEndpoints.getMovieDetailsById(imdbId).then(result => setMovie(result));
  }, [imdbId]);
  const goBack = () => navigation.goBack();
  return (
    <>
      <SafeAreaView style={styles.backContainer}>
        <Pressable
          onPress={goBack}
          hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </SafeAreaView>
      <ScrollView style={styles.background}>
        {!movie ? (
          <SafeAreaView>
            <ActivityIndicator color={Assets.colors.white} />
          </SafeAreaView>
        ) : (
          <>
            <ImageBackground
              source={{uri: movie?.Poster}}
              style={styles.poster}
            />
            <View style={styles.container}>
              <Text style={styles.title}>{movie.Title}</Text>
              <Text style={styles.text}>
                {movie.Year} - {movie.Genre} - {movie.Runtime} - {movie.Rated}
              </Text>
              <Text style={styles.subtitle}>IMDB Rating</Text>

              <Text style={styles.normalText}>
                <Text style={styles.highlightedText}>{movie.imdbRating}</Text>{' '}
                /10
              </Text>
              <Text style={styles.normalText}>{movie.imdbVotes}</Text>
              <Text style={styles.subtitle}>Plot summary</Text>
              <Text style={styles.normalText}>{movie.Plot}</Text>
              <Text style={styles.subtitle}>Cast</Text>
              <Text style={styles.normalText}>{movie.Actors}</Text>
              <Text style={styles.subtitle}>Director</Text>
              <Text style={styles.normalText}>{movie.Director}</Text>
              <Text style={styles.subtitle}>Writers</Text>
              <Text style={styles.normalText}>{movie.Writer}</Text>
              <Text style={styles.subtitle}>Release date</Text>
              <Text style={styles.normalText}>{movie.Released}</Text>
              <Text style={styles.subtitle}>Awards</Text>
              <Text style={styles.normalText}>{movie.Awards}</Text>
              <Text style={styles.subtitle}>Production</Text>
              <Text style={styles.normalText}>{movie.Production}</Text>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default MovieScreen;
