import { useRef, useState } from 'react'


function App() {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);

  function handleStart(){

    if(intervalIdRef.current!=null){
      return;
    }


    intervalIdRef.current = setInterval(()=>{
      setTime(time=>time+1);
    },500);
  }

  function handleStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>Stopwatch:{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
