import React from "react";
import { useState } from "react";

function Add({ setData }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const addData = () => {
    setData((preData) => [
      ...preData,
      {
        name,
        species,
        age,
        id: preData[preData.length - 1].id + 1,
      },
    ]);

    setName("");
    setSpecies("");
    setAge("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        placeholder="species"
        onChange={(e) => {
          setSpecies(e.target.value);
        }}
        value={species}
      />
      <input
        type="text"
        placeholder="나이"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
      />
      <button onClick={addData}>추가하기</button>
    </div>
  );
}

export default Add;
