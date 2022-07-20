import { Component } from "react";
import {Statistics} from "./Statistics/Statistics"
import { FeedbackOptions } from "./Feedback/Feedback";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
     good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => this.state.bad + this.state.good + this.state.neutral 
  
  countPositiveFeedbackPercentage = () =>{
    const result = this.state.good * 100 / this.countTotalFeedback()
    return Math.round(result)
  }

  handleFeedback = (event) =>{
    const { name } = event.target

    this.setState(ps => {return {[name]: ps[name] + 1}});
  }

  render () {
    const {good, neutral, bad} = this.state
    return (<>
      <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={this.handleFeedback}/>
      </Section>
      <Section title="Statistics">
      {this.countTotalFeedback() !== 0?<Statistics good={good} neutral={neutral} bad={bad} total ={this.countTotalFeedback()} percentage={this.countPositiveFeedbackPercentage()} />:<Notification message="There is no feedback"></Notification>}
      </Section>
      </>
    )
  }
}