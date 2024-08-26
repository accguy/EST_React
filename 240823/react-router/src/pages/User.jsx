import React from "react";
import { useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  // search
  const searchParams = new URLSearchParams(location.search); //현재 URL의 쿼리 문자열.
  const username = searchParams.get("username");
  const id = searchParams.get("id");
  // state
  const { password, address } = location.state || {};
  console.log("🚀 ~ User ~ location.state:", location.state);

  return (
    <div>
      <h1>User</h1>
      <div>username: {username}</div>
      <div>id: {id}</div>
      <hr />
      <div>password: {password}</div>
      <div>address: {address}</div>
    </div>
  );
}
