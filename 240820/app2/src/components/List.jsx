import React from "react";

export default function List({ data }) {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            {item.name}는 {item.species}입니다 그리고 {item.age}살 입니다.
          </li>
        );
      })}
    </ul>
  );
}
