import React from 'react'
import PropTypes from 'prop-types'

const Button = ({clickHandler, label }) => {
  return (
    <div>
      <button onClick={clickHandler}>{label}</button>
    </div>
  )
}

Button.propTypes = {
  clickHandler: PropTypes.func,
  label: PropTypes.string,
}

export default Button

