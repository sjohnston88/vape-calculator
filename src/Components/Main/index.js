import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Header";
import InputButton from "../InputButton";
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
        value: 0
      },
      nicotine: {
        name: "Nicotine",
        description: "Set the Strength",
        value: 0
      },
      vg: {
        name: "VG",
        description: "Set the VG %",
        value: 0
      },
      pg: {
        name: "PG",
        description: "Set the VG %",
        value: 0
      }
    };
  }

  handleIncrease = (event, name) => {
    event.preventDefault();
    let key = name.toLowerCase();
    this.setState(prevState => ({
      [key]: {
        ...prevState[key],
        value: this.state[key].value + 1
      }
    }));
  };

  handleDecrease = (event, name) => {
    event.preventDefault();
    let key = name.toLowerCase();
    this.setState(prevState => ({
      [key]: {
        ...prevState[key],
        value: this.state[key].value - 1
      }
    }));
  };

  handleChange = (event, name) => {
    event.preventDefault();
    let key = name.toLowerCase();
    let value = event.target.value;
    this.setState(prevState => ({
      [key]: {
        ...prevState[key],
        value: value
      }
    }));
  };

  render() {
    return (
      <div>
        <Header siteName={this.state.siteName} />
        <div className={this.props.classes.wrapper}>
          <InputButton
            name={this.state.volume.name}
            value={this.state.volume.value}
            onChangeValue={this.handleChange}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
          />
          <InputButton
            name={this.state.nicotine.name}
            value={this.state.nicotine.value}
            onChangeValue={this.handleChange}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
          />
          <InputButton
            name={this.state.vg.name}
            value={this.state.vg.value}
            onChangeValue={this.handleChange}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
          />
          <InputButton
            name={this.state.pg.name}
            value={this.state.pg.value}
            onChangeValue={this.handleChange}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
          />
        </div>
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
              <td>{this.state.volume.value}</td>
              <td>{this.state.nicotine.value}</td>
              <td>{this.state.vg.value}</td>
              <td>{this.state.pg.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
