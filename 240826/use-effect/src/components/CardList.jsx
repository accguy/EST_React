import React from "react";
import CardItem from "./CardItem";

export default function CardList({ data, currentListType }) {
  const list =
    currentListType === "EUR"
      ? data
          .filter((x) => x.loc === "europe")
          .map((item) => {
            return <CardItem key={item.id} countrydata={item}></CardItem>;
          })
      : data.map((item) => {
          return <CardItem key={item.id} countrydata={item}></CardItem>;
        });

  return <ul>{list}</ul>;
}
// key는 list-item에서 설정하면 안됨.
// list 생성할때 넣어줘야됨
