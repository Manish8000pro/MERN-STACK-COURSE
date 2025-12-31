import { useState } from 'react';
import Sum from './Sum';


function App() {
  const [count, setCount] = useState(0);
  const [number,setNumber] = useState(1000)

  console.log("App render")
  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>Your current Number:{number} </h2>
      <button onClick={()=>setNumber(number+100)}>Increment Number</button>
      <Sum number={number}></Sum>
    </>
  )
}

export default App
