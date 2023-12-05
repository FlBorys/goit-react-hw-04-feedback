import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistics/Statistic";
import { Section } from "./Section/Section";
import { Notifiction } from "./Notification/Notification";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

    onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotal = () => {
    const totalAmount = this.state.good + this.state.neutral + this.state.bad;
    return totalAmount;
  };

  countPercentage = () => {
    const percentage = (this.state.good / this.countTotal()) * 100;
    return Math.round(percentage);
  };


  render() {
    return (
      <div>
              <Section title="Please leave feedback">
<FeedbackOptions options={Object.keys(this.state)}
          leaveFeedback={this.onLeaveFeedback} />
          </Section>
        <Section title="Statistics">
        {this.countTotal() !== 0 ?
          <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotal()} positivePercentage={this.countPercentage()} /> :
          <Notifiction title="There is no feedback" />}
      </Section>
      </div>
      );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
