import React from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends React.Component {
  static propTypes = {
    getMortgageRates: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {};

  getRates = () => {
    const {getMortgageRates} = this.props;
    const {amount} = this.state;
    getMortgageRates(amount);
  };

  loanAmountHandler = e => {
    this.setState({amount: e.target.value})
  };

  render() {
    return (
      <div className="home-page">
        <h1>HomePage</h1>
        <input type="text" id="loan-amount" onChange={this.loanAmountHandler}/>
        <button onClick={this.getRates}/>
      </div>
    );
  }
}
