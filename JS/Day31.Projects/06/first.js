const result = document.getElementById("Parent")
const currentTime = Date.now()

const OlympiceTime = new Date(2028,6,14) .getTime();
let timer = OlympiceTime-currentTime;

// millisecond 

const day = Math.floor((timer)/(1000*60*60*24))
timer%= 1000*60*60*24;

const hour = Math.floor((timer)/(1000*60*60))
timer%= 1000*60*60;

const minute = Math.floor((timer)/(1000*60))
timer%= 1000*60;

const see = Math.floor((timer)/(1000))
timer%= 1000;

result.textContent = `${day}: Days ${hour}:Hours ${minute}:Minutes ${see}:Seconds`
