import {GET_MORTGAGE_RATES} from "../actions/homePageActions";

const initialState = {
  rates: []
};
export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MORTGAGE_RATES:
      return Object.assign({}, state, {
        rates: action.rates,
      });

    default:
      return state;
  }
}
