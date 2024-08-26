import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  border-radius: 15px;
`;

export default function CardItem({ countrydata }) {
  return (
    <StyledLi>
      <h3>{countrydata.title}</h3>
      <p>population: {countrydata.population}</p>
    </StyledLi>
  );
}
