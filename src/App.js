import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)
  const [showError, setShowError] = React.useState(false)
  const incClick = () => {
    if (showError) {
      setShowError(false)
    }
    setCount(count+1)
  }
  const decClick = () => {
    if (count===0) {
      setShowError(true)
    }
    else {
      setCount(count-1)
    }
  }
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The Counter is currently <span data-test="count">{count}</span></h1>
      { showError ? <h2 data-test="error-message" style={{color:"red"}}>Counter Cannot go below 0</h2> : null }
      <button onClick={incClick} data-test="increment-button">Increment</button>
      <button onClick={decClick} data-test="decrement-button">Decrement</button>
    </div>
  );
}

export default App;
