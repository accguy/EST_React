const DisplayTime = ({ time, hour, min, sec }) => {
  console.log(time);
  return (
    <div className="display-time">
      <h1>
        총 {time || 0}초 {time === null ? "끝!!!" : null}
      </h1>
      <span>{hour} 시간 </span>
      <span>{min} 분 </span>
      <span>{sec} 초 </span>
      <span>남았습니다.</span>
    </div>
  );
};

export default DisplayTime;
