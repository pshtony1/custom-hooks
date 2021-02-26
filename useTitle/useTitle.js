import { useEffect, useState } from "react";

export const useTitle = (defalutTitle = "Empty Title") => {
  const [title, setTitle] = useState(defalutTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.textContent = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};
