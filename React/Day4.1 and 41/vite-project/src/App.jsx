
import { useState } from "react";

function App(){

  let [count,setCount] = useState(0);

  // let count = 0;

  // function increaseNumber(){
  //   count++;
    // console.log(count)
    // const para = document.querySelector('p')
    // para.textContent = `Counter:${count}`;
  

    function increaseNumber(){
    count++;
    setCount(count);
  }

  return (
    <>
    <p>Counter:{count}</p>
    <button onClick={increaseNumber}>Increment:{count}</button>
    </>
  )
}

export default App;