import React, { Component } from "react";
import Focuses from "./Focuses";


class FocusesContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      let { classes } = this.props;
      return (
        <div>
            <Focuses />
        </div>
      );
    }
  }
  
  export default FocusesContainer;
  