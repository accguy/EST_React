const DisplayTime = ({ time }) => {
  // 총 시간만 있으면 시, 분, 초는 디스플레이만 하면되기 때문에
  // state로 관리할 필요가 없다.
  return (
    <div className="display-time">
      <h1>TIMER</h1>
    </div>
  );
};

export default DisplayTime;
