import { useEffect, useState } from "react";

const selectedIndexStorageKey = "selectedIndex";

export function useSelectedTabIndex() {
  const initialSelectedIndex = () =>
    Number(window.localStorage.getItem(selectedIndexStorageKey)) || 0;
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const handleSelect = (index, last) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    window.localStorage.setItem(selectedIndexStorageKey, selectedIndex);
  }, [selectedIndex]);
  return {
    selectedIndex,
    handleSelect
  };
}
