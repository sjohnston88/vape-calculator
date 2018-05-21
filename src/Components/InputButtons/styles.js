const styles = {
  wrapper: {
    width: "25%"
  },
  button: {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "none",
    backgroundColor: "red"
  },
  input: {
    fontFamily: "'Raleway', sans-serif",
    boxSizing: "border-box",
    fontSize: "18px",
    height: "50px",
    border: "1px solid #ccc",
    padding: "4px 6px",
    textAlign: "center",
    width: "100%",
    maxWidth: "25%",
    wordBreak: "break-all"
  },
  "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
    appearance: "none",
    margin: 0
  }
};

export default styles;
