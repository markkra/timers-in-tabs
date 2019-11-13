import React from 'react';
import ElapsedTime from './elapsedTime';
import Button from './button';
import { useTimer } from './hooks/useTimer';
import { PropTypes } from 'prop-types';

export default function Timer({uniqueTimerId}){
  const {timeDisplay, handleClick, handleReset, getLabel } = useTimer(uniqueTimerId);

  return (
    <>
      <ElapsedTime display={timeDisplay}/>
      <Button clickHandler={handleClick} label={getLabel()}/>
      <Button clickHandler={handleReset} label={'Reset'} />
    </>
  )

}

Timer.propTypes = {
  uniqueTimerId: PropTypes.string,
}
