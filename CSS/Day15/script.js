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

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width =
    scrollPercent + "%";

});

// Scroll Reveal Animation

const hiddenElements = document.querySelectorAll(
".project, .item, .stats-card, .edfirst, .edsecond"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// Typing Animation
const text = [
    "Frontend Developer",
    "AI Enthusiast",
    "JavaScript Learner",
    "Creative Coder",
    "Data Structure and Algorithm"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;

        setTimeout(type,1000);
    }else{
        setTimeout(type,100);
    }

})();

// Status section  Animated Status section
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter,30);

        }else{
            counter.innerText = target;
        }

    };

    updateCounter();

});
