function clock(){
    let hours = document.querySelector(".hours");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");

    let date = new Date();
    // console.log(date)
    let hr = date.getHours();
    let mint = date.getMinutes();
    let sec = date.getSeconds();

    rotation in deg 
    hours.style.transform = `rotateZ(${hr*30 + mint/12}deg)`;
    minute.style.transform = `rotateZ(${mint*6}deg)`;
    second.style.transform = `rotateZ(${sec*6}deg)`;

}
clock();
setInterval(clock,1000);