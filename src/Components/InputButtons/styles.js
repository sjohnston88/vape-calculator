const styles = {
  wrapper: {
    display:"flex",
    margin: "10px 5px",
    width: "23.6%",
    minWidth: "23.6%",
    maxWidth: "23.6%",
    height: "50px"
  },
  button: {
    border: "1px solid #ccc",
    width: "50px",
    height: "50px",
    outline: "none"
  },
  input: {
    margin: 0,
    display: "inline-block",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: "4px 6px",
    boxSizing: "border-box",
    borderRadius: 0,
    outline: 0,
    fontSize: "18px",
    height: "50px",
    textAlign: "center",
    width: "100%",
    minWidth: "25%",
    wordBreak: "break-all",
  }, 
    "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
    appearance: "none",
    margin: 0
  }
};

export default styles;
