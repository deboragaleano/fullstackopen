import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([])

  const handleRandomAnecdote = () => {
    let randomNum = Math.floor((Math.random() * 5) + 1);
    setSelected(randomNum);
  }

  const points = new Array(6+1).join('0').split('').map(parseFloat); 

  // store the votes of each anecdote into an array
  const handleVotes = () => {
    let newArr = points[selected] += 1
    console.log(...points, newArr); 
  }

  return (
      <div>
        {selected === 0 ? 'Click below to get anecdote':
          <h1>{anecdotes[selected]}</h1>
        }
        <div>
          <button onClick={handleVotes}>Vote</button>
          <button onClick={handleRandomAnecdote}>Get anecdote</button>
          <p>has votes</p>
        </div>
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