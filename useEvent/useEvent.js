import { useEffect, useRef } from "react";

export const useEvent = (eventType, onEvent) => {
  if (!eventType) throw Error("eventType is required in useEvent.");
  if (!onEvent) throw Error("onEvent is required in useEvent.");
  if (typeof onEvent !== "function") return null;

  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener(eventType, onEvent);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener(eventType, onEvent);
      }
    };
  }, []);

  return element;
};
