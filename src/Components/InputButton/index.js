import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Add, Remove } from "@material-ui/icons";
import styles from "./styles";

class InputButton extends Component {
  render() {
    return (
      <div className={this.props.classes.wrapper}>
        <button
          className={this.props.classes.button}
          onClick={event => this.props.onDecrease(event, this.props.name)}
        >
          <Remove />
        </button>
        <input
          className={this.props.classes.input}
          type="number"
          id={this.props.name}
          placeholder={this.props.name}
          value={this.props.value}
          onChange={event => this.props.onChangeValue(event, this.props.name)}
        />
        <button
          className={this.props.classes.button}
          onClick={event => this.props.onIncrease(event, this.props.name)}
        >
          <Add />
        </button>
      </div>
    );
  }
}

export default withStyles(styles)(InputButton);
