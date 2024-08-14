function Licat(data) {
  console.log(data);
  const name = data.name;
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
    </div>
  );
}

export default Licat;
