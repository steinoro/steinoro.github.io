import React, {Component} from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";
import TotalCalculations from "./TotalCalculations";

class AmountCalculations extends Component {
state = {
  BASICLOAN: 109533,
  HOUSINGLOAN: 0,
  KIDSLOAN: 0,
  LOANCUT: 0,
}

//yearlyPayOut = 9*payOut
// if (grantValue) THEN loan = payOut*0.7

// =============== Calculations ===============================================
componentDidMount = () => {
  this.calculateHousingLoan();
  this.calculateKidsLoan();
  this.calculateLoanCut();
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
  if (this.props.rentValue == true){
    if (this.props.relationshipValue == true ) {
      if (this.props.kidsValue == 0) {
        super.setState({ HOUSINGLOAN: 53193 });
      } else if (this.props.kidsValue == 1) {
        this.setState({ HOUSINGLOAN: 62226 });
      } else {
        this.setState({ HOUSINGLOAN: 67246 });
      };
    } else {
      if (this.props.kidsValue == 0) {
        this.setState({ HOUSINGLOAN: 75273 });
      } else if (this.props.kidsValue == 1) {
        this.setState({ HOUSINGLOAN: 124453 });
      } else {
        this.setState({ HOUSINGLOAN: 134500 });
      };
    };
  } else {
    this.setState({ HOUSINGLOAN: 0 });
  };
};

// =============== Calculate kids loan ========================================

calculateKidsLoan = () => {
  const {kidsValue} = this.props;
  var {KIDSLOAN} = this.state;
  this.setState({ KIDSLOAN: kidsValue*35600});
};

// =============== Calculate loan cut =========================================

calculateLoanCut = () => {
  const surplus = this.props.studyIncomeValue-1330000;
  if (surplus > 0 ) {
    this.setState({ LOANCUT: 0.45*surplus });
  } else {
    this.setState({ LOANCUT: 0 });
  };
};


render() {

  return (

    <div>
      <div className="flex">
        <DisplayChild
          func={this.state.BASICLOAN}
          text={"Grunnframfærsla"}
        />
        <DisplayChild
          func={this.state.HOUSINGLOAN}
          text={"Lán vegna húsnæði"}
        />
        <DisplayChild
          func={this.state.KIDSLOAN}
          text={"Lán vegna barna"}
        />
        <div className="negative">
        <DisplayChild
          func={this.state.LOANCUT}
          text={"Skerðing vegna tekna"}
          />
        </div>
      </div>
      <div>
        <TotalCalculations
          BASICLOAN={this.state.BASICLOAN}
          HOUSINGLOAN={this.state.HOUSINGLOAN}
          KIDSLOAN={this.state.KIDSLOAN}
          LOANCUT={this.state.LOANCUT}
        />
      </div>
    </div>
  );
}
}

export default AmountCalculations
