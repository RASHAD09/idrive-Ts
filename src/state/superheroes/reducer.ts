import {TMarvelSuperHero} from '@iDRIVE/services';
import {SET_HEROES} from './actions';
import {TSuperHeroesActionTypes} from './types';

type TSuperheroesReducer = {
  superheroes: TMarvelSuperHero[];
};
const initialState: TSuperheroesReducer = {
  superheroes: [],
};

const superheroesReducer = (
  state = initialState,
  action: TSuperHeroesActionTypes,
) => {
  switch (action.type) {
    case SET_HEROES: {
      const {superheroes} = action.payload;
      return {
        ...state,
        superheroes,
      };
    }
    default:
      return state;
  }
};

export default superheroesReducer;
