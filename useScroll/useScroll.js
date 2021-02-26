import { useEffect, useState } from "react";

const optimizeScroll = (callback) => {
  let flag = false;

  return () => {
    if (flag) return;

    flag = true;
    return requestAnimationFrame(() => {
      flag = false;
      return callback();
    });
  };
};

export const useScroll = (onScroll = () => {}) => {
  const [state, setState] = useState({
    scrollY: 0,
    scrollX: 0,
  });

  const handleScroll = optimizeScroll(() => {
    setState({
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    });

    if (typeof onScroll === "function") {
      onScroll();
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return state;
};
