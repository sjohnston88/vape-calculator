import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Calculator from "../Calculator";
import styles from "./styles";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "Vape Calculator",
      siteDescription: "Nicotine &amp; E-liquid Calculator",
      volume: {
        name: "Volume",
        description: "Set the Amount",
        value:0,
      },
      nicotine: {
        name: "Nicotine",
        description: "Set the Strength",
        value:0,
      },
      vg: {
        name: "VG",
        description: "Set the VG %",
        value:0,
      },
      pg: {
        name: "PG",
        description: "Set the VG %",
        value:0,
      }
    };
  }

  handleIncrease = e => {
    e.preventDefault();
    this.setState({ inputValue: this.state.inputValue + 1 });
  }

  handleDecrease = e => {
    e.preventDefault();
    this.setState({ inputValue: this.state.inputValue - 1 });
  }

  render() {
    return (
      <div>
        <Header siteName={this.state.siteName} />
        <div className={this.props.classes.wrapper}>
          <Calculator 
            volume={this.state.volume} 
            nicotine={this.state.nicotine} 
            vg={this.state.vg} 
            pg={this.state.pg} 
            onIncrease={this.handleIncrease()} 
            onDecrease={this.handleDecrease()} />
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
      </div>
    );
  }
}

export default withStyles(styles)(Main);
