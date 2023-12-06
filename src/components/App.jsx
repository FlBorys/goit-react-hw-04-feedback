import { Component, useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistics/Statistic";
import { Section } from "./Section/Section";
import { Notifiction } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case "good":
        setGood(prevNumber => prevNumber + 1);
        break;
      
            case "neutral":
        setNeutral(prevNumber => prevNumber + 1);
        break;
      
            case "bad":
        setBad(prevNumber => prevNumber + 1);
        break;
      
      default:
        break;
    }
  };

    const countTotal = () => {
    const totalAmount = good + neutral + bad;
    return totalAmount;
  };

  const countPercentage = () => {
    const percentage = (good / countTotal()) * 100;
    return Math.round(percentage);
  };

      return (
      <div>
              <Section title="Please leave feedback">
<FeedbackOptions options={Object.keys(state)}
          leaveFeedback={onLeaveFeedback} />
          </Section>
        <Section title="Statistics">
        {countTotal() !== 0 ?
          <Statistic good={good} neutral={neutral} bad={bad} total={countTotal()} positivePercentage={countPercentage()} /> :
          <Notifiction title="There is no feedback" />}
      </Section>
      </div>
      );
  }
