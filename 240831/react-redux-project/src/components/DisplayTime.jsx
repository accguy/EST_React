const DisplayTime = ({ time }) => {
  // 총 시간만 있으면 시, 분, 초는 디스플레이만 하면되기 때문에
  // state로 관리할 필요가 없다.
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);

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
