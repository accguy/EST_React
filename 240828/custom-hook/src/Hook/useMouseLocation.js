import { useEffect, useState } from "react";

const useMouseLocation = () => {
  const [mouseLocation, setMouseLocation] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseLocation({ x: e.x, y: e.y });
    });
  }, []);

  return mouseLocation;
};

export default useMouseLocation;
