const Button = ({ feeling, setFeeling, isSelected }) => {
  const clickBtn = () => {
    setFeeling(isSelected ? null : feeling);
  };

  return (
    <li
      style={{
        marginBottom: "10px",
      }}
    >
      <button
        onClick={clickBtn}
        style={{
          width: "100%",
          fontSize: "1.5rem",
          backgroundColor: isSelected ? "skyblue" : null,
        }}
      >
        기분이: <span>{feeling}</span>
      </button>
    </li>
  );
};

export default Button;
