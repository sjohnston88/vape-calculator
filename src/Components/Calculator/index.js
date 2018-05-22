import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputButtons from "../InputButtons";

class Calculator extends Component {
  render() {
    return (
      <div className={this.props.classes.wrapper}>
        <InputButtons 
          type={this.props.volume} 
          onIncrease={(e) => this.props.onIncrease(e, this.props.volume)}/>
      </div>
    );
  }
}

export default withStyles(styles)(Calculator);
