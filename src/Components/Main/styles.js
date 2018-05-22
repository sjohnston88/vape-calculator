const styles = {
  wrapper: {
    margin: "0 auto",
    paddingTop: "80px",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  table: {
    margin: "0 auto",
    width: "90%",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    fontSize: "16px",
    lineHeight: "1.2",
    "& td": {
      fontFamily: "'Raleway', sans-serif",
      height: "30px",
      border: "1px solid #ccc",
      padding: "4px 6px",
      textAlign: "center",
      verticalAlign: "middle",
      width: "25%",
      maxWidth: "25%",
      wordBreak: "break-all"
    }
  }
};

export default styles;
