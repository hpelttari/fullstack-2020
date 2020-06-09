import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
     {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad > 0){
    return (
       <div>
        <StatisticLine text={"good"} value={good}/> 
        <StatisticLine text={"neutral"} value={neutral}/> 
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"all"} value={good + bad + neutral}/>
	<StatisticLine text={"average"} value={(good - bad)/(good + bad + neutral)}/>
	<StatisticLine text={"positive"} value={(good/(good + bad + neutral)*100)}/>
        </div>

    )
		
  }
  return (
    <div>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
     setGood(good+1)
  }

  const handleBadClick = () => {
     setBad(bad+1)
  } 

  const handleNeutralClick = () => {
     setNeutral(neutral+1)
  } 

  return (
    <div>
      <h1> give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"}/>
      <Button handleClick={handleNeutralClick} text={"neutral"}/>
      <Button handleClick={handleBadClick} text={"bad"}/>
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

