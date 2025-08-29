import { useState } from 'react'

const Counter = () => {
  return (
    const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count++)
    }
    <div>
    <p>Button Clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
    </div>
    
  )
}

export default Counter
