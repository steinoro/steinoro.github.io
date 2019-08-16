import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class CalculateHousingLoan extends Component {
  state = {
    HOUSINGLOAN: 1
  };

  componentDidMount() {
    this.calculateHousingLoan();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateHousingLoan();
    }
  }

  calculateHousingLoan = () => {
    const {rentValue, relationshipValue, kidsValue} = this.props;

    if (rentValue == true){// && relationshipValue == true && kidsValue == 0) {
      if (relationshipValue == true ) {
        if (kidsValue == 0) {
          this.setState({ HOUSINGLOAN: 53193 });
        } else if (kidsValue == 1) {
          this.setState({ HOUSINGLOAN: 62226 });
        } else {
          this.setState({ HOUSINGLOAN: 67246 });
        };
      } else {
        if (kidsValue == 0) {
          this.setState({ HOUSINGLOAN: 75273 });
        } else if (kidsValue == 1) {
          this.setState({ HOUSINGLOAN: 124453 });
        } else {
          this.setState({ HOUSINGLOAN: 134500 });
        };
      };
    } else {
      this.setState({ HOUSINGLOAN: 0 });
    };
  };

  housingLoanPaid = () => {
    return <p>{this.state.HOUSINGLOAN} kr</p>;
  };

  render() {
    return (
        <DisplayChild func={this.housingLoanPaid()} text="Lán vegna húsnæðis" />
    );
  }
}

CalculateHousingLoan.propTypes = {
  rentValue: PropTypes.number.isRequired,
  relationshipValue: PropTypes.number.isRequired,
  kidsValue: PropTypes.number.isRequired,
};


export default CalculateHousingLoan;
