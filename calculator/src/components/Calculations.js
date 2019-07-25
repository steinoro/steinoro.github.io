import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Calculations extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    const { amount } = this.props;

    if (1000 < amount && amount < 5000) {
      this.setState({ APR: 0.05 });
    }
    if (5000 < amount && amount < 10000) {
      this.setState({ APR: 0.1 });
    }
    if (10000 < amount && amount < 15000) {
      this.setState({ APR: 0.15 });
    }
    if (15000 < amount && amount < 20000) {
      this.setState({ APR: 0.2 });
    }
  };

  calculateMonthlyRepayment = () => {
    const { amount, years } = this.props;

    const decimalFormat = this.state.APR + 1;
    const totalOwed = decimalFormat * amount;
    const monthlyRepayment = totalOwed / (years * 12);

    return <p>{Math.round(monthlyRepayment)} kr</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <span><p>{this.state.basicLoan} kr</p><small>Grunnframfærsla</small></span>
        <span><p>{this.state.housingLoan} kr</p><small>Lán vegna húsnæðis</small></span>
        <span><p>{this.state.kidsLoan} kr</p><small>Lán vegna barna</small></span>
        <span><p>{this.state.loanCut} kr</p><small>Skerðing vegna tekna</small></span>

      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
