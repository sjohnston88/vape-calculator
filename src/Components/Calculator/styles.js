const styles = {
  wrapper: {
    width: "80%",
    margin: "0 auto",
    "& input": {
      fontFamily: "'Raleway', sans-serif",
      boxSizing: "border-box",
      fontSize: "18px",
      height: "50px",
      border: "1px solid #ccc",
      padding: "4px 6px",
      textAlign: "center",
      width: "25%",
      maxWidth: "25%",
      wordBreak: "break-all"
    },
    "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
      appearance: "none",
      margin: 0
    }
  },
  table: {
    fontFamily: "'Raleway', sans-serif",
    margin: "0 auto",
    marginTop: "5%",
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    fontSize: "16px",
    lineHeight: "1.2",
    "& thead td": {
      fontFamily: "'Raleway', sans-serif",
      height: "30px",
      border: "1px solid #ccc",
      padding: "4px 6px",
      textAlign: "center",
      verticalAlign: "middle",
      width: "25%",
      maxWidth: "25%",
      wordBreak: "break-all"
    },
    "& tbody td": {
      fontFamily: "'Raleway', sans-serif",
      height: "30px",
      border: "1px solid #ccc",
      padding: "4px 6px",
      textAlign: "center",
      verticalAlign: "top",
      width: "25%",
      maxWidth: "25%",
      wordBreak: "break-all"
    }
  }
};

export default styles;
