import React, { useState } from "react";
import _ from "lodash";
import nextId from "react-id-generator";

const HomePage2 = props => {
  const [filterByVal, setFilterBy] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [amount, setAmount] = useState("");
  const [rates, setRates] = useState([]);

  const getRates = () => {
    const match = /[$,]/g;
    let cleanAmount = amount.replace(match, "");
    useFetch(cleanAmount);
  };

  const loanAmountHandler = e => {
    setAmount(e.target.value);
  };

  const loanTable = loans => {
    let filteredLoans = loans;
    if (filterByVal && filterByVal !== "") {
      filteredLoans = loans.filter(loan => loan.loan_product === filterByVal);
    }
    let newLoans = _.orderBy(filteredLoans, [sortKey]);

    return (
      <div className="loan-table">
        <div className="table-row">
          <div className="table-cell header">Bank Name</div>
          <div className="table-cell header">Product</div>
          <div className="table-cell header">Interest Rate</div>
          <div className="table-cell header">Loan Term</div>
          <div className="table-cell header">Monthly Payment</div>
          <div className="table-cell header">Rate Type</div>
        </div>
        {newLoans.map(loan => {
          return getTableRow(loan);
        })}
      </div>
    );
  };

  const getTableRow = row => {
    const loanProductMap = {
      FNMA15YRFXCF: "15 year fixed Rate",
      FNMA30YRFXCF: "30 year fixed Rate",
      FNMA71ARMCF: "7/1 ARM"
    };

    return (
      <div className="table-row" key={nextId()}>
        <div className="table-cell">{row.lender.name}</div>
        <div className="table-cell">{loanProductMap[row.loan_product]}</div>
        <div className="table-cell">{`${(row.interest_rate * 100).toFixed(
          2
        )}%`}</div>
        <div className="table-cell">{`${row.loan_term} years`}</div>
        <div className="table-cell">{`$${row.monthly_payment}`}</div>
        <div className="table-cell">{row.rate_type}</div>
      </div>
    );
  };

  const sortBy = e => {
    setSortKey(e.target.value);
  };

  const filterBy = e => {
    setFilterBy(e.target.value);
  };

  async function useFetch(amount) {
    // const resp = await fetch(`http://morty.mockable.io/quotes?loan_amount=${amount}`);
    const resp = await fetch(
      `https://mockserverforloanrates.free.beeceptor.com?loan_amount=${amount}`
    );
    const json = await resp.json();
    setRates(json);
    return amount;
  }
  return (
    <div className="home-page">
      <h1>Today&#39;s Mortgage Rates</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="loan amount"
          id="loan-amount"
          onChange={loanAmountHandler}
        />
        <button className="get-rates" onClick={getRates}>
          get latest rates
        </button>
        <label htmlFor="sort" className="sort-label">
          Sort by:
        </label>
        <select name="" id="sort" className="sort-by" onChange={sortBy}>
          <option value="monthly_payment" className="sort-by-option">
            Monthly Payment
          </option>
          <option value="interest_rate" className="sort-by-option">
            Interest Rate
          </option>
          <option value="loan_term" className="sort-by-option">
            Loan Term
          </option>
        </select>
        <label htmlFor="sort" className="sort-label">
          Filter by:
        </label>
        <select name="" id="sort" className="sort-by" onChange={filterBy}>
          <option value="" className="sort-by-option">
            --none--
          </option>
          <option value="FNMA15YRFXCF" className="sort-by-option">
            15 year fixed
          </option>
          <option value="FNMA30YRFXCF" className="sort-by-option">
            30 year fixed
          </option>
          <option value="FNMA71ARMCF" className="sort-by-option">
            7/1 ARM
          </option>
        </select>
      </div>
      {rates.length > 0 && <div>{loanTable(rates)}</div>}
      {rates.length < 1 && <div>no results</div>}
      Note: API returns rates for loan amounts greater than $100,000
    </div>
  );
};

export default HomePage2;
