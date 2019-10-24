import reducer from './homePageReducer';
import {GET_MORTGAGE_RATES} from '../actions/homePageActions'

describe('Reducers::homePageReducer', () => {
  const getInitialState = () => {
    return  {rates: []};
  };

  const getAppState = () => {
    return {rates: [
      {
        "lender": {"id": "1:", "name": "Apple Bank", "symbol": "APPLE"},
        "loan_product": "FNMA15YRFXCF",
        "interest_rate": ".021",
        "loan_term": "15",
        "monthly_payment": "1461.11",
        "rate_type": "fixed"
      }
      ]}
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle GET_MORTGAGE_RATES', () => {
    const action = { type: GET_MORTGAGE_RATES,rates : getAppState() };
    const expected = Object.assign({rates:getAppState()});

    expect(reducer(getAppState(), action)).toEqual(expected);
  });
});
