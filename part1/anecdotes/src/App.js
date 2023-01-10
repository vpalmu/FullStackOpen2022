import { useState } from 'react'
import Anecdote from './Anecdote'
import Button from './Button'
import { getRandomIndex, getBiggestVoteQty, getIndexOfMatchingAnecdote, addVote } from './functions.js'
import Title from './Title'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const initialPoints = new Uint8Array(anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialPoints)

  const nextButtonClickHandler = () => {
    setSelected(getRandomIndex(anecdotes.length))
  }

  const voteButtonClickHandler = () => {
    const pointsWithVote = addVote(selected, points)
    setPoints(pointsWithVote)
  }

  const voteWithMostPoints = getBiggestVoteQty(...points)
  const indexOfMostVoted = getIndexOfMatchingAnecdote(voteWithMostPoints, points)
  
  return (
    <div>
      <Title titleText='Anecdote of the day'/>
      <Anecdote anecdoteText={anecdotes[selected]} voteQty={points[selected]} />
      <Button buttonText='vote' handleClick={ () => voteButtonClickHandler() } />
      <Button buttonText='next anecdote' handleClick={ () => nextButtonClickHandler() }/>
      <Title titleText='Anecdote with the most votes'/>
      <Anecdote anecdoteText={anecdotes[indexOfMostVoted]} voteQty={voteWithMostPoints} />
    </div>
  )
}

export default App
