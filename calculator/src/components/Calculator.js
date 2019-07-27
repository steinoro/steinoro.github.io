import React, { Component } from "react";
import InputRange from "react-input-range";
import DisplayChild from "./DisplayChild";
import CalculateHousingLoan from "./CalculateHousingLoan";
import CalculateKidsLoan from "./CalculateKidsLoan";
import CalculateLoanCut from "./CalculateLoanCut";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";


const Checkbox = props => (
  <input type="checkbox" {...props} />
)
class Calculator extends Component {
  state = {
    // ----------------------------- Variables -----------------------------
    relationshipValue: false,          // Binary, í sambandi eða ekki
    grantValue: true,                  // Binary, annað hvort færðu styrk eða ekki
    rentValue: false,                  // Binary, á leigumarkaði eða ekki
    kidsValue: 0,                      // Int, fjöldi barna
    tuitionValue: 0,                   // Int, upphæð lána
    graduationValue: [2020, 6],        // Tuple eða listi á formatinu ár/mán
    receivingLoanPeriodValue: 0,       // Int, fjöldi ára í námi
    studyIncomeValue: 0,               // Int, árlegar tekjur námsmanna

    // ----------------------------- Loan values -------------------------------
    basicLoan: 109533,
    housingLoan: 0,
    kidsLoan: 0,
    loanCut: 0,

    // ----------------------------- "Fixed" values ----------------------------
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


// Húsnæðis: rentValue=false: 0
    // relationshipValue=false AND kidsValue=0: 75273
    // relationshipValue=false AND kidsValue=1: 124453
    // relationshipValue=false AND kidsValue>=2: 134500
    // relationshipValue=true AND kidsValue=0: 53193
    // relationshipValue=true AND kidsValue=1: 62226
    // relationshipValue=true AND kidsValue>=2: 67246
// Barnalán: 35600*kidsValue

// incomeLimit = 1330000
// loanCut = MAX(0.45*(studyIncomeValue-incomeLimit); 0)

// payOut = MAX(basicLoan+housingLoan+kidsLoan-loanCut ;0)

//yearlyPayOut = 9*payOut



// if (grantValue) THEN loan = payOut*0.7

// =============== Calculations ===============================================




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
      <div className="flex">
        <span><p>{this.state.basicLoan} kr</p><small>Grunnframfærsla</small></span>

        <CalculateHousingLoan
          rentValue={this.state.rentValue}
          relationshipValue={this.state.relationshipValue}
          kidsValue={this.state.kidsValue}
        />

        <CalculateKidsLoan
          kidsValue={this.state.kidsValue}
        />

        <div className="negative">
          <CalculateLoanCut
            studyIncomeValue={this.state.studyIncomeValue}
          />
        </div>
      </div>
    </div>
  );
}

}

export default Calculator;
