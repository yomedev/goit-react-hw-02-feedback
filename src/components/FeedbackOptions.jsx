import React from 'react'
import PropTypes from 'prop-types';

let FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div >
      {
        options.map(option => (
          <button
            key={option}
            onClick={_ => onLeaveFeedback(option)}
          >{option}</button>
        ))
      }
    </div>
  )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}