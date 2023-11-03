import {TMarvelSuperHero} from '@iDRIVE/services';
import {TSuperHeroesActionTypes} from './types';

export const SET_HEROES = 'SET_HEROES';

export const setSuperHeroesAction = (
  heroes: TMarvelSuperHero[],
): TSuperHeroesActionTypes => ({
  type: SET_HEROES,
  payload: {
    superheroes: heroes,
  },
});
