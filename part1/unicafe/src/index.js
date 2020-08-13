import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Statistics from './Statistics'; 
import Button from './Button'; 

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
      
      {sumFeedback === 0 ? 'No feedback yet' :  
      <table>
        <Statistics text='Good' value={good}/>
        <Statistics text='Neutral' value={neutral} />
        <Statistics text='Bad' value={bad} />
        <Statistics text='Total number of collected feedback' value={sumFeedback} />
        <Statistics text='Average score' value={averageScore} />
        <Statistics text='Positive feedback' value={positiveFeedback} />
      </table>
      }
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)