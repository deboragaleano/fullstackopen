import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
  const points = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points)

  const handleRandomAnecdote = () => {
    let randomNum = Math.floor((Math.random() * 5) + 1);
    setSelected(randomNum);
  }

  const handleVotes  = () => {
      const copyArr = [...votes];
      copyArr[selected] += 1
      setVotes(copyArr);
  }

  const maxNum = Math.max(...votes);

  const indexMax = votes.indexOf(Math.max(...votes));


  return (
      <div>
          <h1>Anecdotes of the day</h1>
          <p>{anecdotes[selected]}</p>
        <div>
          <button onClick={handleVotes}>Vote</button>
          <button onClick={handleRandomAnecdote}>Get anecdote</button>
          <p>has {votes[selected]} votes</p>
        </div>
        <h1>Anecdote with most votes</h1>
          <p>{anecdotes[indexMax]}</p>
          <p>has {maxNum} votes</p>
      </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, 
  document.getElementById('root')
)