import Button from "./Button";

const feelings = [
  "좋아요! 😃",
  "정말 좋아요! 😊",
  "최고예요! 😆",
  "미쳤어요!! 😎",
];

function ButtonList({ setFeeling, currentFeeling }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0px",
      }}
    >
      {feelings.map((item, index) => {
        return (
          <Button
            key={index}
            feeling={item}
            setFeeling={setFeeling}
            isSelected={currentFeeling === item}
          />
        );
      })}
    </ul>
  );
}

export default ButtonList;
