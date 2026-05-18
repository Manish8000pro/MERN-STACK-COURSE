// Dark-light btn 

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        themeToggle.innerHTML = "☀️";

    }else{

        themeToggle.innerHTML = "🌙";

    }

});