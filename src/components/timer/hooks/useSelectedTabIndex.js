import { useEffect, useState } from "react";

export function useSelectedTabIndex(selectedIndexStorageKey = "selectedIndex") {
  const initialSelectedIndex = () =>
    Number(window.localStorage.getItem(selectedIndexStorageKey)) || 0;
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const handleSelect = (index, last) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    window.localStorage.setItem(selectedIndexStorageKey, selectedIndex);
  }, [selectedIndex, selectedIndexStorageKey]);
  return {
    selectedIndex,
    handleSelect
  };
}
