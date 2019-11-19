import React from "react";
import ElapsedTime from "./elapsedTime";
import Button from "./button";
import useTimer, { TimerState } from "./hooks/useTimer";
import { PropTypes } from "prop-types";
import formatTimeStamp from "format-duration";

const LABEL_START = "Start";
const LABEL_PAUSE = "Pause";
const LABEL_RESUME = "Resume";

function displayTimeFrom(durationMillisecs) {
  return formatTimeStamp(durationMillisecs, { leading: true });
}

function toggleButtonLabel(state) {
  let label;
  switch (state) {
    case TimerState.STOPPED:
      label = LABEL_START;
      break;
    case TimerState.PAUSED:
      label = LABEL_RESUME;
      break;
    case TimerState.RUNNING:
      label = LABEL_PAUSE;
      break;
    default:
      label = LABEL_START;
  }
  return label;
}

export default function Timer({ uniqueTimerId }) {
  const { duration, toggle, reset, timerState } = useTimer(uniqueTimerId);

  return (
    <>
      <ElapsedTime display={displayTimeFrom(duration)} />
      <Button clickHandler={toggle} label={toggleButtonLabel(timerState)} />
      <Button clickHandler={reset} label={"Reset"} />
    </>
  );
}

Timer.propTypes = {
  uniqueTimerId: PropTypes.string
};
