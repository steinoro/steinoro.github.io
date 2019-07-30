import React, {Component} from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class TotalCalculations extends Component {
state = {
  PAYOUT: 0
}

//yearlyPayOut = 9*payOut
// if (grantValue) THEN loan = payOut*0.7

// =============== Calculations ===============================================
componentDidMount = () => {
  this.calculateMonthlyPayout();
}

componentDidUpdate = (prevProps) => {
  if (prevProps !== this.props ) {
    this.calculateMonthlyPayout();
  };
}

// =============== Calculate monthly payout ===================================

calculateMonthlyPayout = () => {
  const monthlyLoan = this.props.BASICLOAN+this.props.HOUSINGLOAN+this.props.KIDSLOAN-this.props.LOANCUT;
  if (monthlyLoan > 0) {
    this.setState({ PAYOUT: monthlyLoan });
  } else {
    this.setState({ PAYOUT: 0 });
  };
};

render() {

  return (

    <div>
        <DisplayChild
          func={this.state.PAYOUT}
          text={"Útborgað á mánuði"}
        />
    </div>
  );
}
}

export default TotalCalculations
