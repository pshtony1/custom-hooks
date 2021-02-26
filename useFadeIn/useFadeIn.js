import { useEffect, useRef } from "react";

export const useFadeIn = (
  fromOpacity = 0,
  toOpacity = 1,
  duration = 0.3,
  cubicBezier = "linear",
  delay = 0
) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ${cubicBezier}`;
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = toOpacity;
    }
  }, []);

  return { ref: element, style: { opacity: fromOpacity } };
};
