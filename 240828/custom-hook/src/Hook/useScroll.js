import { useEffect } from "react";
import { useState } from "react";

const useScroll = () => {
  const [isEnd, setIsEnd] = useState(false);

  // 렌더링 될때마다 이벤트를 등록할 필요가 없기 때문에
  // 이벤트는 useEffect를 사용하여 등록한다.
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setIsEnd(
        document.documentElement.offsetHeight - 20 <=
          window.innerHeight + document.documentElement.scrollTop
      ); // setIsEnd는 비동기로 동작함
    });
  }, []);

  // setIsBottom이 실행이 완전히 되고나서 렌더링이되는것이기 때문인거 맞죠?
  // console.log("🚀 ~ useScroll ~ isEnd:", isEnd);

  return isEnd;
};

export default useScroll;
