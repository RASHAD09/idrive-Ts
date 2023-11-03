import {stringMd5} from 'react-native-quick-md5';
import {
  apiRoutes,
  MARVEL_PRIVATE_API_KEY,
  MARVEL_PUBLIC_API_KEY,
  MOVIE_TYPE,
  OMDB_API_KEY,
} from './configs.rest';
import ApiManager from './manager.rest';
import {
  ESearchMovieParams,
  TGetMarvelHeroesResponse,
  TGetMovieResponse,
  THeroData,
  TMovieDetails,
} from './types.rest';

export const apiEndpoints = {
  getAllSuperHeroes: (): Promise<THeroData[]> => {
    const api = new ApiManager();
    return api.addRoute(apiRoutes.getAllSuperHeroes).get().send() as Promise<
      THeroData[]
    >;
  },
  getMarvelSuperHeroes: (): Promise<TGetMarvelHeroesResponse> => {
    const api = new ApiManager();
    const ts = new Date().getUTCSeconds();
    const hash = stringMd5(
      ts.toString() + MARVEL_PRIVATE_API_KEY + MARVEL_PUBLIC_API_KEY,
    );
    return api
      .addRoute(apiRoutes.getMarvelSuperHeroes)
      .addParams([
        {
          key: ESearchMovieParams.apikey,
          value: MARVEL_PUBLIC_API_KEY,
        },
        {
          key: ESearchMovieParams.timestamp,
          value: ts.toString(),
        },
        {
          key: ESearchMovieParams.hash,
          value: hash,
        },
        {
          key: ESearchMovieParams.orderBy,
          value: '-modified',
        },
        {
          key: ESearchMovieParams.limit,
          value: '100',
        },
      ])
      .get()
      .send() as Promise<TGetMarvelHeroesResponse>;
  },
  getMovie: (superhero: string): Promise<TGetMovieResponse> => {
    const api = new ApiManager();
    return api
      .addRoute(apiRoutes.getMovie)
      .addParams([
        {
          key: ESearchMovieParams.search,
          value: superhero,
        },
        {
          key: ESearchMovieParams.type,
          value: MOVIE_TYPE,
        },
        {
          key: ESearchMovieParams.apikey,
          value: OMDB_API_KEY,
        },
      ])
      .get()
      .send() as Promise<TGetMovieResponse>;
  },
  getMovieDetailsById: (id: string): Promise<TMovieDetails> => {
    const api = new ApiManager();
    return api
      .addRoute(apiRoutes.getMovie)
      .addParams([
        {
          key: ESearchMovieParams.imdbId,
          value: id,
        },
        {
          key: ESearchMovieParams.apikey,
          value: OMDB_API_KEY,
        },
      ])
      .get()
      .send() as Promise<TMovieDetails>;
  },
};
