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
}) => {
  return (
    <div className="button-container">
      <button
        className="start-btn"
        ref={startBtnRef}
        onClick={handleStart}
        disabled={isRunning}
      >
        START
      </button>
      <button
        className="pause-btn"
        ref={pauseBtnRef}
        onClick={handlePause}
        disabled={time === null || isPaused}
      >
        PAUSE
      </button>
      <button className="reset-btn" ref={resetBtnRef} onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default ButtonContainer;
