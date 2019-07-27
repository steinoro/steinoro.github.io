import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class CalculateLoanCut extends Component {
  state = {
    LOANCUT: 0
  };

  componentDidMount() {
    this.calculateLoanCut();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateLoanCut();
    }
  }

  calculateLoanCut = () => {
    const {studyIncomeValue} = this.props;
    const surplus = studyIncomeValue-1330000;

    if (surplus > 0 ) {
      this.setState({ LOANCUT: 0.45*surplus });
    } else {
      this.setState({ LOANCUT: 0 });
    };
  };

  loanCutReturn = () => {
    return <p>{this.state.LOANCUT} kr</p>;
  };

  render() {
    return (
        <DisplayChild func={this.loanCutReturn()} text="Skerðing vegna tekna" />
    );
  }
}

CalculateLoanCut.propTypes = {
  studyIncomeValue: PropTypes.number.isRequired,
};


export default CalculateLoanCut;
