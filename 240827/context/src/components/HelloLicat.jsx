import React, { useContext } from "react";
import { UserInfo } from "../contexts/UserInfo";

function HelloLicat() {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h1>Hello</h1>
      <strong>{name}</strong>
      <div>{id}</div>
      <HelloLicatTwo />
    </div>
  );
}

function HelloLicatTwo() {
  const { name, id } = useContext(UserInfo);
  return (
    <>
      <h1>Hello2</h1>
      <strong>{name}</strong>
      <div>{id}</div>
    </>
  );
}

export default HelloLicat;
