import {
  NUTRITION_FETCH,
  NUTRITION_FETCH_SUCCESS,
  NUTRITION_FETCH_ERROR,
} from '../actions/nutritionActions';

const initialState = {
  isFetching: true,
  nutrition: [],
  error: '',
}

const nutritionReducer  = (state = initialState, action) => {
  switch (action.type) {

  case NUTRITION_FETCH:
    console.log('dsadasd')
    return { ...state, isFetching: action.status};
  
  case NUTRITION_FETCH_SUCCESS:
    return {...state, nutrition: action.data};

  default:
    return state
  }
}

export default nutritionReducer;
