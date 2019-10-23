import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/homePageActions';
// eslint-disable-next-line import/named
// import {getMortgageRates} from '../../actions/homePageActions';
import HomePage from "../HomePage";


function mapStateToProps(state) {
  return {
    rates: state.homePageReducer.rates
  };
}

function mapDispatchToProps(dispatch) {
  const combinedActions = Object.assign({}, actions);
  return bindActionCreators(combinedActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
