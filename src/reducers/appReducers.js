import { APP_LOCATION } from '../actions/appActions';

const initialState = {
  location: 'Comidas',
};

export default (state = initialState, { type, location }) => {
  switch (type) {
    case APP_LOCATION:
      return { ...state, location };

    default:
      return state;
  }
};
