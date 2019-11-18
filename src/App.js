import React from "react";
import "./App.css";
import Timer from "./components/timer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelectedTabIndex } from "./components/timer/hooks/useSelectedTabIndex";

function App() {
  const { selectedIndex, handleSelect } = useSelectedTabIndex();

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
