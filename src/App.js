import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The Counter is currently<span data-test="count">{count}</span></h1>
      <button data-test="increment-button">Increment</button>
    </div>
  );
}

export default App;
