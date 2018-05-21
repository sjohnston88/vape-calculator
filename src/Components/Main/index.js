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
      siteDescription: "Nicotine &amp; E-liquid Calculator"
    };
  }

  render() {
    return (
      <div>
        <Header siteName={this.state.siteName} />
        <div className={this.props.classes.wrapper}>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
