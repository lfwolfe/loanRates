import React from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends React.Component {
  static propTypes = {
    getMortgageRates: PropTypes.func.isRequired,
    rates: PropTypes.arrayOf(PropTypes.object).isRequired,
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

  loanTable = (loans) => {
    return (
      <div className="loan-table">
        {loans.map(loan =>{
          return this.getTableRow(loan);
        })}
      </div>
    )
  };

  getTableRow = row => {
    return (
      <div className="table-row">
        <div className="table-cell">{row.lender.name}</div>
        <div className="table-cell">{row.loan_product}</div>
        <div className="table-cell">{row.interest_rate}</div>
        <div className="table-cell">{row.loan_term}</div>
        <div className="table-cell">{row.monthly_payment}</div>
        <div className="table-cell">{row.rate_type}</div>
      </div>)
  }

  render() {
    const {rates} = this.props;
    return (
      <div className="home-page">
        <h1>Today&#39;s Mortgage Rates</h1>
        <input type="text" placeholder="loan amount" id="loan-amount" onChange={this.loanAmountHandler}/>
        <button onClick={this.getRates}>get latest rates</button>
        {rates.length > 0 && (
          <div>{this.loanTable(rates)}</div>
        )}
        {rates.length < 1 && <div>no results</div>}
      </div>
    );
  }
}
