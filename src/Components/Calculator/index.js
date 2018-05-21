import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputButtons from "../InputButtons";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      nicotine: "",
      vg: "",
      pg: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let name = e.target.id;
    let value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  render() {
    return (
      <div className={this.props.classes.wrapper}>
        <InputButtons name="amount" onChange={e => this.handleChange(e)} />
        <input
          type="number"
          id="amount"
          placeholder="Amount to make:"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number"
          id="nicotine"
          placeholder="Nicotine Strength"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number"
          id="vg"
          placeholder="VG Amount"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number"
          id="pg"
          placeholder="PG Amount"
          onChange={e => this.handleChange(e)}
        />

        <table className={this.props.classes.table}>
          <thead>
            <tr>
              <td>
                <strong>Volume</strong>
              </td>
              <td>
                <strong>Nicotine</strong>
              </td>
              <td>
                <strong>VG</strong>
              </td>
              <td>
                <strong>PG</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.amount}</td>
              <td>{this.state.nicotine}</td>
              <td>{this.state.vg}</td>
              <td>{this.state.pg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withStyles(styles)(Calculator);
