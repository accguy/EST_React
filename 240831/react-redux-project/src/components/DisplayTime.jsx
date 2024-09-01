const DisplayTime = ({ time }) => {
  // 총 시간만 있으면 시, 분, 초는 디스플레이만 하면되기 때문에
  // state로 관리할 필요가 없다.
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);

  return (
    <div className="display-time">
      <h1>TIMER</h1>
      {/* <h2>
        time: {time || 0} {time ? null : "끝!"}
      </h2>
      <span>{String(hour).padStart(2, "0")} : </span>
      <span>{String(min).padStart(2, "0")} : </span>
      <span>{String(sec).padStart(2, "0")} </span> */}
    </div>
  );
};

export default DisplayTime;
