import { useRef } from "react";

function Video(){

    const videoRef = useRef(null);


    function handleStart(){
        videoRef.current.play();
    }

    function handleStop(){
        videoRef.current.pause();
    }

    function handleRestart(){
        videoRef.current.currentTime = 0;
    }

    function handleForward(){
        videoRef.current.currentTime+=5;
    }

    function handleBackward(){
        videoRef.current.currentTime-=5;
    }

    return(
        <>
        <video ref={videoRef} src="/Strike.mp4.mp4" width={500} height={300}></video>
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleBackward}>⏪</button>
            <button onClick={handleForward}>⏩</button>
        </div>
        </>
    )
}

export default Video;