import React, { Component } from "react";
import InputRange from "react-input-range";
import Calculations from "./Calculations";
import DisplayChild from "./DisplayChild";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    // ----------------------------- Variables --------------------------------
    relationshipValue: false,          // Binary, í sambandi eða ekki
    grantValue: true,                  // Binary, annað hvort færðu styrk eða ekki
    rentValue: false,                  // Binary, á leigumarkaði eða ekki
    kidsValue: 0,                      // Int, fjöldi barna
    tuitionValue: 0,                   // Int, upphæð lána
    graduationValue: [2020, 6],        // Tuple eða listi á formatinu ár/mán
    receivingLoanPeriodValue: 0,       // Int, fjöldi ára í námi
    studyIncomeValue: 0,               // Int, árlegar tekjur námsmanna

    // ----------------------------- Loan values ------------------------------
    basicLoan: 109533,
    HOUSINGLOAN: 0,
    KIDSLOAN: 0,
    LOANCUT: 0,
    PAYOUT: 0,

    // ----------------------------- "Fixed" values ---------------------------
    estimatedMonthlyWageValue: 550000, // Int, áætluð mánaðarlaun í upphafi eftir námslok
    estimatedInflationValue: 3.2,      // Double, áætluð verðbólga
    interestIndexedValue: 2.5,         // Double, áætlaðir vextir af verðtrygðum lánum
    interestFloatingValue: 5.7,         // Double, áætlaðir vextir af óverðtrygðum lánum

  };


  handleRelationshipChange = () => {
    this.setState({ relationshipValue: !this.state.relationshipValue });
  };
  handleGrantChange = value => {
    this.setState({ grantValue: value });
  };
  handleRentChange = () => {
    this.setState({rentValue: !this.state.rentValue});
  };
  handleKidsChange = value => {
    this.setState({ kidsValue: value });
  };
  handleTuitionChange = value => {
    this.setState({ tuitionValue: value });
  };
  handleGraduationChange = value => {
    this.setState({ graduationValue: value });
  };
  handleReceivingLoanPeriodChange = value => {
    this.setState({ receivingLoanPeriodValue: value });
  };
  handleStudyIncomeChange = value => {
    this.setState({ studyIncomeValue: value });
  };
  handleEstimatedMonthlyWageChange = value => {
    this.setState({ estimatedMonthlyWageValue: value });
  };
  handleEstimatedInflationChange = value => {
    this.setState({ estimatedInflationValue: value });
  };
  handleInteresIndexedChange = value => {
    this.setState({ interestIndexedValue: value });
  };
  handleinterestFloatChange = value => {
    this.setState({ interestFloatingValue: value });
  };
  handleKidsLoanChange = value => {
    this.setState({ kidsLoan: value });
  };


//yearlyPayOut = 9*payOut
// if (grantValue) THEN loan = payOut*0.7

// =============== Calculations ===============================================

componentDidMount() {
  <Calculations
    
  />
}

componentDidUpdate(prevProps) {
  if (prevProps !== this.props) {
    <Calculations
      relationshipValue={this.relationshipValue}
      grantValue={this.grantValue}
      rentValue={this.rentValue}
      kidsValue={this.kidsValue}
      tuitionValue={this.tuitionValue}
      graduationValue={this.graduationValue}
      receivingLoanPeriodValue={this.receivingLoanPeriodValue}
      studyIncomeValue={this.studyIncomeValue}

    />
  };
}

// --------------- Render of calculator ---------------------------------------

render() {
  const { relationshipValue, grantValue, rentValue, kidsValue, tuitionValue, graduationValue, receivingLoanPeriodValue, studyIncomeValue } = this.state;

  return (
    <div className="App">
      <h1>SÍN reiknivél</h1>
      <small>Settu inn þínar forsendur og fá þínar tölur</small>

      <div className="flex">
        <h4>
          <label class="checkboxcontainer">
            <span>Í sambúð eða hjónaband </span>
            <input type="checkbox" value={this.state.relationshipValue}
              onClick={this.handleRelationshipChange}
            /><span class="checkmark"></span>
          </label>
        </h4>

        <h4>
          <label class="checkboxcontainer">
            <span>Leigu eða eigin húsnæði</span>
            <input type="checkbox" value={this.state.rentValue}
              onClick={this.handleRentChange}
            /><span class="checkmark"></span>
          </label>
        </h4>
      </div>

      <h4> Fjöldi barna: {kidsValue} </h4>
      <InputRange
        step={1}
        maxValue={9}
        minValue={0}
        value={kidsValue}
        onChange={this.handleKidsChange}
      />

      <h4> Fjöldi ára með námslánum: {receivingLoanPeriodValue} </h4>
      <InputRange
        step={1}
        maxValue={8}
        minValue={1}
        value={receivingLoanPeriodValue}
        onChange={this.handleReceivingLoanPeriodChange}
      />

      <h4> Áætlaðar tekjur á meðan námi stendur (á ári): {studyIncomeValue} kr</h4>
      <InputRange
        step={10000}
        maxValue={2000000}
        minValue={0}
        value={studyIncomeValue}
        onChange={this.handleStudyIncomeChange}
      />

      <h2>Þú færð</h2>
      <div className="flex">
        <DisplayChild
          func={this.state.basicLoan}
          text={"Grunnframfærsla"}
        />
        <DisplayChild
          func={this.state.HOUSINGLOAN}
          text={"Lán vegna húsnæðis"}
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
      <div className="flex">
        <DisplayChild
          func={this.state.PAYOUT}
          text={"Samtáls útborgað á mánuði"}
        />
      </div>
    </div>
  );
}

}

export default Calculator;
