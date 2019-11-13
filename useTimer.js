import { useCallback, useDebugValue, useState, useEffect, useRef } from 'react';
import formatTimeStamp from 'format-duration';
import { useInterval } from "./useInterval";

export function useTimer(uniqueTimerId) {
  const initialTimingEvents = () => JSON.parse(window.localStorage.getItem(uniqueTimerId)) || [];
  const [timingEvents, setTimingEvents] = useState(initialTimingEvents);
  const [displayTime, setDisplayTime] = useState('');
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const totalTime = useRef(0);

  function dateFromDateString(dateStr){
    return new Date(dateStr);
  }

  function getDisplayTime(durationMillisecs){
    return formatTimeStamp(durationMillisecs, { leading: true })
  }

  useEffect(() => {
    window.localStorage.setItem(uniqueTimerId, JSON.stringify(timingEvents));
    return () => window.localStorage.setItem(uniqueTimerId, JSON.stringify(timingEvents));
  }, [timingEvents, uniqueTimerId]);

  const refreshTimeDisplay = useCallback((events) => {
    let total = 0;
    for (let i = 0; i < events.length; i += 2) {
      const startTime = dateFromDateString(events[i]);
      const nextDateString = events[i + 1];
      const stopTime = (nextDateString && dateFromDateString(nextDateString)) || new Date();
      total += stopTime - startTime;
    }
    totalTime.current = total;

    setDisplayTime(getDisplayTime(totalTime.current));
  },[totalTime]);

  const handleReset = () => setTimingEvents([]);

  const handleClick = () => setTimingEvents([
    ...timingEvents,
    new Date()
  ]);

  const getLabel = () => {
    if(timingEvents.length === 0){
      return 'Start';
    }
    return timingEvents.length % 2 === 0 ? 'Resume' : 'Pause';
  };

  useEffect(() => {
    refreshTimeDisplay(timingEvents);
    setIsRunning(timingEvents.length % 2 !== 0);

  }, [refreshTimeDisplay, timingEvents]);

  useInterval(() => {
    refreshTimeDisplay(timingEvents);
  }, isRunning ? delay : null);

  useDebugValue(displayTime);
  return {
    timeDisplay: displayTime,
    handleClick,
    handleReset,
    getLabel,
  };
}
