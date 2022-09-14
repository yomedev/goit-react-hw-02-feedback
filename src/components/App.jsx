import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const countTotalFeedback = _ => {
    return Object.values(feedback).reduce((prev, curr) => prev + curr, 0)
  }

  const countPositiveFeedbackPercentage = _ => {
    return countTotalFeedback() && feedback.good
      ? Math.ceil(feedback.good / countTotalFeedback() * 100)
      : 0
  }

  const onLeaveFeedback = option => setFeedback({
    ...feedback,
    [option]: feedback[option] + 1
  })

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)} onLeaveFeedback={onLeaveFeedback}
        />
        {
          Object.values(feedback).some(Boolean)
            ? <Statistics
              good={feedback.good}
              bad={feedback.bad}
              neutral={feedback.neutral}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            : <Notification message="There is no feedback" />
        }

      </Section>


    </div >
  );
};
