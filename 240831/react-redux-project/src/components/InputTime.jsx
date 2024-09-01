const InputTime = ({ inputHrsRef, inputMinRef, inputSecRef }) => {
  return (
    <div className="input-container">
      <input className="input-hrs" ref={inputHrsRef} type="number" />
      <input className="input-min" ref={inputMinRef} type="number" />
      <input className="input-sec" ref={inputSecRef} type="number" />
    </div>
  );
};

export default InputTime;
