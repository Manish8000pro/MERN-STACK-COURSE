import { useEffect, useState } from "react";

function Clock(){

    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [show,setshow] = useState(true);

    useEffect(()=>{

        if(!show)
            return;

        const intervalId =  setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        console.log("Hi") 
    }, 1000);

        return()=>{
            clearInterval(intervalId);
        }

    },[show])

    return(
        <>
        <button onClick={()=>setshow(!show)}> {show?"Hide":"Show"}</button>
        {
            show&&<h1>Current Time: {time} </h1>
        }
        </>
        
    )
}

export default Clock;