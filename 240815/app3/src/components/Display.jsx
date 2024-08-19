function Display(props) {
  return (
    <div
      style={{
        border: "3px solid #000",
        borderRadius: "8px",
        fontSize: "3rem",
        padding: "30px",
        height: "300px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {props.feeling === null
        ? "기분을 선택해주세요."
        : `기분이 ${props.feeling}`}
    </div>
  );
}

export default Display;
