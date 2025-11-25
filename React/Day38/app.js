

// Create a element using Js
const element1 = document.createElement('h1');
element1.textContent = "Hello Coder Army";
element1.className = 'element'
element1.id = 'first';
element1.style.fontSize="30px";
element1.style.backgroundColor = "orange";
element1.style.color = "white";

const root = document.getElementById('root');
root.append(element1);