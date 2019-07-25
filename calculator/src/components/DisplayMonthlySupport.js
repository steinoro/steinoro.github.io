import React from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    APR: 0.05
  };

  componentDidMount() {
    this.calculateSupport();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateSupport();
    }
  }






  <DisplayChild
    func={this.NUMBER()}
    text="mánaðarleg framfærsla"
  />

export default DisplayChild;
