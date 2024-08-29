import InputComponent from "./Input";
import SomethingComponent from "./Somthing";
import useScroll from "./Hook/useScroll";
import useMouseLocation from "./Hook/useMouseLocation";
import { useEffect, useLayoutEffect, useState } from "react";

const Image = ({ src }) => {
  return <img src={src} style={{ width: "300px" }} />;
};

const ImageList = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              <p>{item.id}</p>
              <Image src={item.download_url} />
            </li>
          );
        })}
    </ul>
  );
};

const Loading = () => {
  return <img src="Loading_icon.gif" />;
};

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const isEndOfScroll = useScroll();

  // fetchData
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );

      if (!res.ok) {
        throw new Error();
      }

      const newData = await res.json();
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.log("에러 발생");
    }
  };

  // fetchData
  useEffect(() => {
    fetchData();
  }, [page]);

  // setPage
  useEffect(() => {
    if (isEndOfScroll) {
      setPage((prevPage) => prevPage + 1);
    }
    console.log(page);
  }, [isEndOfScroll]);

  // components
  return (
    <div>
      {isLoading && <Loading />}
      <ImageList data={data} />
    </div>
  );
}
export default App;
