import React, {Component} from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class AmountCalculations extends Component {
state = {
  BASICLOAN: 109533,
  HOUSINGLOAN: 0,
  KIDSLOAN: 0,
  LOANCUT: 0,
  PAYOUT: 0
}
// =============== Set initial values to 0 ====================================

// =============== Calculate housing loan =====================================

//yearlyPayOut = 9*payOut
// if (grantValue) THEN loan = payOut*0.7

// =============== Calculations ===============================================
componentDidMount = () => {
  this.calculateHousingLoan();
  this.calculateKidsLoan();
  this.calculateLoanCut();
  this.calculateMonthlyPayout();
}

componentDidUpdate = (prevProps) => {
  if (prevProps !== this.props ) {
    this.calculateHousingLoan();
    this.calculateKidsLoan();
    this.calculateLoanCut();
  };
}

// =============== Calculate housing loan =====================================

calculateHousingLoan = () => {
  const {rentValue, relationshipValue, kidsValue} = this.props;
  var {HOUSINGLOAN} = this.state;

  if (rentValue == true){
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
    this.setState({ HOUSINGLOAN: 0 });
  };
  this.calculateMonthlyPayout();
};

// =============== Calculate kids loan ========================================

calculateKidsLoan = () => {
  const {kidsValue} = this.props;
  var {KIDSLOAN} = this.state;
  this.setState({ KIDSLOAN: kidsValue*35600});
  this.calculateMonthlyPayout();
};

// =============== Calculate loan cut =========================================

calculateLoanCut = () => {
  const {studyIncomeValue} = this.props;
  var {LOANCUT} = this.state;
  const surplus = studyIncomeValue-1330000;
  if (surplus > 0 ) {
    this.setState({ LOANCUT: 0.45*surplus });
  } else {
    this.setState({ LOANCUT: 0 });
  };
  this.calculateMonthlyPayout();
};

// =============== Calculate monthly payout ===================================

calculateMonthlyPayout = () => {
  const {BASICLOAN, HOUSINGLOAN, KIDSLOAN, LOANCUT, PAYOUT} = this.state;
  const monthlyLoan = BASICLOAN+HOUSINGLOAN+KIDSLOAN-LOANCUT;
  if (monthlyLoan > 0) {
    this.setState({ PAYOUT: monthlyLoan });
  } else {
    this.setState({ PAYOUT: 0 });
  };
};

render() {
  const { relationshipValue, grantValue, rentValue, kidsValue, tuitionValue, graduationValue, receivingLoanPeriodValue, studyIncomeValue, BASICLOAN, HOUSINGLOAN, KIDSLOAN, LOANCUT, PAYOUT } = this.state;

  return (

    <div>
      <div className="flex">
        <DisplayChild
          func={BASICLOAN}
          text={"Grunnframfærsla"}
        />
        <DisplayChild
          func={HOUSINGLOAN}
          text={"Lán vegna húsnæði"}
        />
        <DisplayChild
          func={KIDSLOAN}
          text={"Lán vegna barna"}
        />
        <div className="negative">
        <DisplayChild
          func={LOANCUT}
          text={"Skerðing vegna tekna"}
        />
        </div>
      </div>
      <div>
        <DisplayChild
          func={PAYOUT}
          text={"Útborgað á mánuði"}
        />
      </div>
    </div>
  );
}
}

export default AmountCalculations
