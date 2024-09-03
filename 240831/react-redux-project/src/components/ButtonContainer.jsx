import styled from "styled-components";
import iconStart from "../assets/images/icon/icon-start.png";
import iconPause from "../assets/images/icon/icon-pause.png";
import iconReset from "../assets/images/icon/icon-reset.png";
import iconStartDisabled from "../assets/images/icon/icon-start-disabled.png";
import iconResetDisabled from "../assets/images/icon/icon-reset-disabled.png";

const BtnContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Btn = styled.button`
  padding: 16px 23px;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 50px;
  position: relative;
  display: flex;
  gap: 5px;

  &::before {
    content: "";
    display: inline-block;
    background-position: center;
    background-size: contain;
    width: 16px;
    height: 16px;
  }
`;

const StartBtn = styled(Btn)`
  background-color: #5180ff;
  &::before {
    background-image: url(${iconStart});
  }
  &:disabled {
    color: #617199;
    background-color: #324577;

    &::before {
      background-image: url(${iconStartDisabled});
    }
  }
`;
const PauseBtn = styled(Btn)`
  background-color: #15c2b8;
  &::before {
    background-image: url(${iconPause});
  }
`;
const ResetBtn = styled(Btn)`
  background-color: #fb7099;
  &::before {
    background-image: url(${iconReset});
  }
  &:disabled {
    color: #617199;
    background-color: #324577;

    &::before {
      background-image: url(${iconResetDisabled});
    }
  }
`;

const ButtonContainer = ({
  startBtnRef,
  pauseBtnRef,
  resetBtnRef,
  handleStart,
  handlePause,
  handleReset,
  isRunning,
  isPaused,
  time,
  inputHrsVal,
  inputMinVal,
  inputSecVal,
}) => {
  return (
    <BtnContainer className="button-container">
      {isRunning ? null : (
        <StartBtn
          className="start-btn"
          ref={startBtnRef}
          onClick={handleStart}
          disabled={inputHrsVal + inputMinVal + inputSecVal == 0}
        >
          START
        </StartBtn>
      )}
      {isRunning ? (
        <PauseBtn
          className="pause-btn"
          ref={pauseBtnRef}
          onClick={handlePause}
          disabled={time === null || isPaused}
        >
          PAUSE
        </PauseBtn>
      ) : null}

      <ResetBtn
        className="reset-btn"
        ref={resetBtnRef}
        onClick={handleReset}
        disabled={inputHrsVal + inputMinVal + inputSecVal == 0}
      >
        RESET
      </ResetBtn>
    </BtnContainer>
  );
};

export default ButtonContainer;
