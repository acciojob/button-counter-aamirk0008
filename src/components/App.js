import {useState} from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0)
  let handleClick = () => {
    setCount(count+1)
  }
  return (
    <div>
      <p>Button Clicked {count} times</p>
        <button onClick='handleClick'>Click</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
