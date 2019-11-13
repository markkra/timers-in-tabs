import React, { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/timer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const selectedIndexStorageKey = "selectedIndex";

function App() {
  const initialSelectedIndex = () =>
    Number(window.localStorage.getItem(selectedIndexStorageKey)) || 0;
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  const handleSelect = (index, last) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    window.localStorage.setItem(selectedIndexStorageKey, selectedIndex);
  }, [selectedIndex]);

  return (
    <div className="container">
      <Tabs onSelect={handleSelect} selectedIndex={selectedIndex}>
        <TabList>
          <Tab>Timer 1</Tab>
          <Tab>Timer 2</Tab>
          <Tab>Timer 3</Tab>
        </TabList>
        <TabPanel>
          <div className="App-header">
            <Timer uniqueTimerId="timer1" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="App-header">
            <Timer uniqueTimerId="timer2" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="App-header">
            <Timer uniqueTimerId="timer3" />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
