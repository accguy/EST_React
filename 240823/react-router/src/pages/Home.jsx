import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home({ name }) {
  return (
    <StyledDiv>
      <h1>Home</h1>
      <h2>{name}</h2>
      <Link to="/cart">cart</Link>
      <Link
        to={{
          pathname: "/user",
          search: "?username=daon&id=accguy2000",
          hash: "#gang",
          state: { password: "pwwd", address: "서울" },
        }}
      >
        user
      </Link>
    </StyledDiv>
  );
}
