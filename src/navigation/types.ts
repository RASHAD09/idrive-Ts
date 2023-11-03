export type TRootStackParamList = {
  Home: undefined;
  Movie: {imdbId: string};
  SuperHeroes: {selectSuperHero: (superhero: string) => void};
};
