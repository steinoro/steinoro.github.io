import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class CalculateKidsLoan extends Component {
  state = {
    KIDSLOAN: 1
  };

  componentDidMount() {
    this.calculateKidsLoan();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateKidsLoan();
    }
  }

  calculateKidsLoan = () => {
    const {kidsValue} = this.props;
    this.setState({ KIDSLOAN: kidsValue*35600});
  };

  kidsLoanPaid = () => {
    return <p>{this.state.KIDSLOAN} kr</p>;
  };

  render() {
    return (
        <DisplayChild func={this.kidsLoanPaid()} text="Lán vegna barna" />
    );
  }
}

CalculateKidsLoan.propTypes = {
  kidsValue: PropTypes.number.isRequired,
};


export default CalculateKidsLoan;
