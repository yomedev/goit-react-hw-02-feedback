import React from 'react'
import styles from './Feedback.module.css'
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={styles.feedback}>
      <h6>{title}</h6>
      {children}
    </section>
  )
}

export default Section

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

