import { useState } from "react";

export const useTabs = (defaultTab = 0, allTabs) => {
  if (!allTabs) throw Error("allTabs is required in useTabs.");
  if (allTabs.length === 0 || !Array.isArray(allTabs)) return null;

  const [currentIndex, setCurrentIndex] = useState(defaultTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
