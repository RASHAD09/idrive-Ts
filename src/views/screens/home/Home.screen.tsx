import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@iDRIVE/navigation';
import {Assets} from '@iDRIVE/assets';
import styles from './Home.styles';
import {RandomMovieCardComponent} from '@iDRIVE/views/components';
import {apiEndpoints, TMovieData} from '@iDRIVE/services';
import {setSuperHeroesAction} from '@iDRIVE/state';
import {useDispatch, useSelector} from 'react-redux';
import {TRootState} from '@iDRIVE/state/store';
import {generateRandomNumber} from '@iDRIVE/utils';

type THomeScreenProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: THomeScreenProps) => {
  const {superheroes} = useSelector((state: TRootState) => state);
  const [superHero, setSuperHero] = useState<string>();
  const [movie, setMovie] = useState<TMovieData>();
  const [loading, setLoading] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const dispatch = useDispatch();

  const getSuperHeroes = useCallback(() => {
    apiEndpoints.getMarvelSuperHeroes().then(result => {
      dispatch(setSuperHeroesAction(result.data.results));
    });
  }, [dispatch]);

  useLayoutEffect(() => {
    getSuperHeroes();
  }, [getSuperHeroes]);

  const onResetSuperHero = () => setSuperHero('');
  const onGetMoviePress = () => {
    setLoading(true);
    setMovie(undefined);
    setErrorMessage('');
    const getMovie = () => {
      let heroName = '';
      if (!superHero) {
        heroName =
          superheroes && superheroes.length > 0
            ? superheroes[generateRandomNumber(0, superheroes.length - 1)].name
            : 'batman';
      }
      apiEndpoints
        .getMovie(superHero || heroName)
        .then(result => {
          if (result.Search) {
            setMovie(
              result.Search[generateRandomNumber(0, result.Search.length - 1)],
            );
            setLoading(false);
          }
          if (result.Error && !superHero) {
            getMovie();
          }
          if (result.Error && superHero) {
            setLoading(false);
            setErrorMessage(result.Error);
          }
        })
        .catch(() => setMovie(undefined));
    };
    getMovie();
  };

  const onSelectSuperHero = () => {
    const handleSelectedHero = (hero: string) => setSuperHero(hero);

    navigation.navigate('SuperHeroes', {
      selectSuperHero: handleSelectedHero,
    });
  };
  const handleViewMovie = () => {
    movie &&
      navigation.navigate('Movie', {
        imdbId: movie.imdbID,
      });
  };

  return (
    <ImageBackground
      source={Assets.images.postersBackground}
      blurRadius={5}
      style={styles.background}
      resizeMode="repeat">
      <RandomMovieCardComponent
        loading={loading}
        value={movie}
        errorMessage={errorMessage}
        handleViewMovie={handleViewMovie}
      />
      <TouchableOpacity onPress={onGetMoviePress} style={styles.button}>
        <Text style={styles.buttonText}>Surprise Me!</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        {!superHero ? 'Wanna be more specific?' : `SuperHero: ${superHero},`}{' '}
        <Text onPress={onSelectSuperHero} style={styles.highlightedText}>
          {!superHero ? 'Select your SuperHero!' : 'Select another SuperHero!'}
        </Text>
      </Text>
      {superHero ? (
        <Text onPress={onResetSuperHero} style={styles.resetText}>
          Reset Hero
        </Text>
      ) : null}
    </ImageBackground>
  );
};

export default HomeScreen;
