import React from "react";

function Data() {
  const list = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  const items = list.map((item, index) => {
    return (
      // React.Fragment를 사용하여 여러 요소를 반환합니다.
      // 각 Fragment에 대해 고유한 key를 설정합니다.
      // key 속성은 React가 각 항목을 구별하는 데 사용됩니다.
      // 항목이 변경되거나 추가, 삭제될 때 React가 리스트를 효율적으로 업데이트할 수 있게 합니다.
      <React.Fragment key={item.id}>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </React.Fragment>
    );
  });

  // 생성된 items 배열을 <dl> 요소에 포함시켜 반환합니다.
  return <dl>{items}</dl>;
}

function App3() {
  return <Data />;
}

export default App3;
