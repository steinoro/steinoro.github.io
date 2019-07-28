import React from "react";
import PropTypes from "prop-types";

class Calculations {

// =============== Set initial values to 0 ====================================

// =============== Calculate housing loan =====================================

calculateHousingLoan = () => {
  const {rentValue, relationshipValue, kidsValue, HOUSINGLOAN} = this.state;

  if (rentValue == true){// && relationshipValue == true && kidsValue == 0) {
    if (relationshipValue == true ) {
      if (kidsValue == 0) {
        super.setState({ HOUSINGLOAN: 53193 });
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
    super.setState({ HOUSINGLOAN: 0 });
  };
  return { HOUSINGLOAN };
};

// =============== Calculate kids loan ========================================

calculateKidsLoan = () => {
  const {kidsValue, KIDSLOAN} = this.props;
  this.setState({ KIDSLOAN: kidsValue*35600});

  return { KIDSLOAN};
};

// =============== Calculate loan cut =========================================

calculateLoanCut = () => {
  const {studyIncomeValue, LOANCUT} = this.props;
  const surplus = studyIncomeValue-1330000;

  if (surplus > 0 ) {
    this.setState({ LOANCUT: 0.45*surplus });
  } else {
    this.setState({ LOANCUT: 0 });
  };

  return {LOANCUT};
};

// =============== Calculate monthly payout ===================================

calculateMonthlyPayout = () => {
  const {BASICLOAN, HOUSINGLOAN, KIDSLOAN, LOANCUT, PAYOUT} = this.props;
  const monthlyLoan = BASICLOAN+HOUSINGLOAN+KIDSLOAN-LOANCUT;
  if (monthlyLoan > 0) {
    this.setState({ PAYOUT: monthlyLoan });
  } else {
    this.setState({ PAYOUT: 0 });
  };
  return { PAYOUT};
};

};

export default Calculations
