import React, { PropTypes } from 'react'

const Count = ({number}) => (
    <span>{number}</span>
)

Count.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Count
