import { useCallback, useState, useEffect, useRef } from "react";
import { useInterval } from "./useInterval";
import { Enum } from "enumify";

class TimerState extends Enum {}
TimerState.initEnum(["STOPPED", "PAUSED", "RUNNING"]);

function useTimer(uniqueTimerId) {
  const initialTimingEvents = () =>
    JSON.parse(window.localStorage.getItem(uniqueTimerId)) || [];
  const [timingEvents, setTimingEvents] = useState(initialTimingEvents);
  const [duration, setTotalDuration] = useState(0);
  const [delay] = useState(1000);
  const [timerState, setTimerState] = useState(TimerState.STOPPED);
  const totalTime = useRef(0);

  function dateFromDateString(dateStr) {
    return new Date(dateStr);
  }

  const getTimerState = events => {
    if (events.length === 0) {
      return TimerState.STOPPED;
    }
    return events.length % 2 === 0 ? TimerState.PAUSED : TimerState.RUNNING;
  };

  useEffect(() => {
    window.localStorage.setItem(uniqueTimerId, JSON.stringify(timingEvents));
    return () =>
      window.localStorage.setItem(uniqueTimerId, JSON.stringify(timingEvents));
  }, [timingEvents, uniqueTimerId]);

  const refreshTimeDisplay = useCallback(
    events => {
      let total = 0;
      for (let i = 0; i < events.length; i += 2) {
        const startTime = dateFromDateString(events[i]);
        const nextDateString = events[i + 1];
        const stopTime =
          (nextDateString && dateFromDateString(nextDateString)) || new Date();
        total += stopTime - startTime;
      }
      totalTime.current = total;

      setTotalDuration(totalTime.current);
    },
    [totalTime]
  );

  const reset = () => setTimingEvents([]);

  const toggle = () => setTimingEvents([...timingEvents, new Date()]);

  useEffect(() => {
    refreshTimeDisplay(timingEvents);
    setTimerState(getTimerState(timingEvents));
  }, [refreshTimeDisplay, timingEvents]);

  useInterval(
    () => {
      refreshTimeDisplay(timingEvents);
    },
    timerState ? delay : null
  );

  return {
    duration: duration,
    toggle,
    reset,
    timerState
  };
}

export { useTimer as default, TimerState };
