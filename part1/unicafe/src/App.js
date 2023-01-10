import { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {

  // save clicks of each button to it's own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title titleText='Give feedback' />
      <Button handleClick={() => setGood(good + 1)} buttonText='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} buttonText='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} buttonText='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  )
}

export default App;
