import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 22px;
`;

const StyledInput = styled.input`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #354971;
  background-image: linear-gradient(135deg, #4c65a0, #304577);
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const InputTime = ({
  inputHrsRef,
  inputMinRef,
  inputSecRef,
  inputHrsVal,
  inputMinVal,
  inputSecVal,
  setInputHrsVal,
  setInputMinVal,
  setInputSecVal,
}) => {
  return (
    <InputContainer className="input-container">
      <StyledInput
        className="input-hrs"
        placeholder="00"
        ref={inputHrsRef}
        value={inputHrsVal}
        onChange={(e) => {
          setInputHrsVal(e.target.value);
        }}
      />
      <StyledInput
        className="input-min"
        placeholder="00"
        ref={inputMinRef}
        value={inputMinVal}
        onChange={(e) => {
          setInputMinVal(e.target.value);
        }}
      />
      <StyledInput
        className="input-sec"
        placeholder="00"
        ref={inputSecRef}
        value={inputSecVal}
        onChange={(e) => {
          setInputSecVal(e.target.value);
        }}
      />
    </InputContainer>
  );
};

export default InputTime;
