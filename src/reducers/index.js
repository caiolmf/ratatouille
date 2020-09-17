import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import { detailsReducer, recommendationsReducer } from './detailsReducers';
import dataReducers from './dataReducers';
import { randomRecipeReducer, exploreIngredientsReducer, exploreRecipesByArea } from './exploreReducers';
import nutritionReducer from './nutritionReducers'

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
  recommendationsReducer,
  dataReducers,
  randomRecipeReducer,
  exploreIngredientsReducer,
  exploreRecipesByArea,
  nutritionReducer,
});

export default rootReducer;
