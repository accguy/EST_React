function Resume1(props) {
  console.log(props);
  return (
    <div style={{ border: "1px solid #000" }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미: {props.hobby}</h2>
      <h2>좋아하는 음식: {props.food}</h2>
      <h2>
        좋아하는 색: <span style={{ color: props.color }}>{props.color}</span>
      </h2>
    </div>
  );
}

// 함수 매개변수에서 직접 구조 분해 할당을 사용하여 props를 받아옵니다.
// 순서와 상관없이 props를 받아올 수 있습니다.
// 코드의 가독성을 높이고 반복을 줄여줍니다.
function Resume2({ color, food, name, hobby, hello }) {
  console.log({ hello, name, hobby, food, color });
  return (
    <div style={{ border: "1px solid #000" }}>
      <h1>{name} 자기소개서</h1>
      <h1>{hello}</h1>
      <h2>취미: {hobby}</h2>
      <h2>좋아하는 음식: {food}</h2>
      <h2>
        좋아하는 색: <span style={{ color: color }}>{color}</span>
      </h2>
    </div>
  );
}

export { Resume1, Resume2 };
