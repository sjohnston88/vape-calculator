import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class InputButtons extends Component {
  render() {
    return (
      <div className={this.props.classes.wrapper}>
        <button className={this.props.classes.button} onClick={(e) => this.handleDecrease(e)}>-</button>
        <input
          className={this.props.classes.input}
          type="number"
          id={this.props.name}
          placeholder={this.props.name}
          value={this.state.inputValue}
          onChange={e => this.props.onChange(e)}
        />
        <button className={this.props.classes.button} onClick={(e) => this.handleIncrease(e)}>+</button>
      </div>
    );
  }
}

export default withStyles(styles)(InputButtons);
