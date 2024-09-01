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
`;

const InputTime = ({ inputHrsRef, inputMinRef, inputSecRef }) => {
  return (
    <InputContainer className="input-container">
      <StyledInput className="input-hrs" ref={inputHrsRef} />
      <StyledInput className="input-min" ref={inputMinRef} />
      <StyledInput className="input-sec" ref={inputSecRef} />
    </InputContainer>
  );
};

export default InputTime;
