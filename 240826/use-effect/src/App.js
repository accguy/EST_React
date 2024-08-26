import { React, useState, useEffect } from "react";
import CardList from "./components/CardList";
import Button from "./components/Button";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState([]);
  const [currentListType, setCurrentListType] = useState("ALL");

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      if (fetchedData) {
        setData(fetchedData);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <h1>나라 목록</h1>
      <CardList data={data} currentListType={currentListType}></CardList>
      <Button buttontype="ALL" setCurrentListType={setCurrentListType}>
        전체목록
      </Button>
      <Button buttontype="EUR" setCurrentListType={setCurrentListType}>
        유럽목록
      </Button>
    </>
  );
}
export default App;
