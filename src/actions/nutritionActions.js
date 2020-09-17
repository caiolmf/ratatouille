import {getNutritionFacts} from '../service/fetchAPI';

/** Nutrition facts types */
export const NUTRITION_FETCH = 'NUTRITION_FETCH';
export const NUTRITION_FETCH_SUCCESS = 'NUTRITION_FETCH_SUCCESS';
export const NUTRITION_FETCH_ERROR = 'NUTRITION_FETCH_ERROR';

/**
 * Nutrition fetch actions
 */

const nutritionFetch = () => ({
  type: NUTRITION_FETCH,
});

const nutritionFetchSuccess = (data) => ({
  type: NUTRITION_FETCH_SUCCESS,
  data,
});

const nutritionFetchErrored = (error) => ({
  type: NUTRITION_FETCH_ERROR,
  error,
});

/**
 * Request nutritions facts from de the Nutritionix API
 *
 * @param {string} query    Common food search query
 *
 */
export const fetchNutrition = (query) => (dispatch) => 
  getNutritionFacts(query)
    .then((data) => dispatch(nutritionFetchSuccess(data)))
    .then(() => dispatch(nutritionFetch(false)))
    // .catch((error) => dispatch(nutritionFetchErrored(error)));