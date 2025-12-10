import { useState } from "react";

function Clock(){

    const [time,setTime] = useState(new Date().toLocaleTimeString());


    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return(
        <>
        <h1>Current Time: </h1>
        </>
    )
}

export default Clock;