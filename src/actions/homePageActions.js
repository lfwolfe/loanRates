import { apiClient } from '../apiClient';


export const GET_MORTGAGE_RATES = 'GET_MORTGAGE_RATES';


export function getMortgageRates(amount) {
  return (dispatch) => {

    apiClient
      .get(`quotes?loan_amount=${amount}`, {})
      .then((rates) => {
        dispatch(updateRates(rates));
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  };
}

export function updateRates(rawRates) {
  return {
    type: GET_MORTGAGE_RATES,
    rates: rawRates.data,
  };
}
