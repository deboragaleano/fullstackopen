import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
    return (
    <div>
      <p>Total number of collected feedback: {props.sum}</p>
      <p>Average Score: {props.avg}</p>
      <p>Positive feedback: {props.positive} %</p>
    </div>)
}

const App = () => {
  const [good, setGood] = useState(0); 
  const [neutral, setNeutral] = useState(0); 
  const [bad, setBad] = useState(0); 

  const handleClickGood = (newValue) => {
    setGood(newValue); 
  }

  const handleClickNeutral = (newValue) => {
    setNeutral(newValue); 
  }

  const handleClickBad = (newValue) => {
    setBad(newValue); 
  }

  const sumFeedback = good + neutral + bad
  const averageScore = (good - bad) / sumFeedback; 
  const positiveFeedback = good * 100 / sumFeedback; 

  return (
    <div>
      
      <h1>give feedback</h1>
      <Button handleClick={() => handleClickGood(good + 1)} text='good' />
      <Button handleClick={() => handleClickNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => handleClickBad(bad + 1)} text='bad'/>

      <h1>Statistics</h1>
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>

      <h2>More statistics</h2>

      <Statistics sum={sumFeedback} avg={averageScore} positive={positiveFeedback}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)