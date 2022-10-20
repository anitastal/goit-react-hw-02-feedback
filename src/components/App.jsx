import React from 'react';
import { SectionTitle } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statictics';

const options = [
  { title: 'Good', name: 'good' },
  { title: 'Neutral', name: 'neutral' },
  { title: 'Bad', name: 'bad' },
];

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = event => {
    const { name } = event.target;
    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <SectionTitle title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleChange}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      </div>
    );
  }
}
