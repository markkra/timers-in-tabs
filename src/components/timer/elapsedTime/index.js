import React from 'react'
import PropTypes from 'prop-types'

const ElapsedTime = ({display}) => {
  return (
    <div>
      {display}
    </div>
  )
}

ElapsedTime.propTypes = {
  display: PropTypes.string
}

export default ElapsedTime
