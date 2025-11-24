

// Create a element using Js
const element1 = document.createElement('h1');
element1.textContent = "Hello Coder Army";
element1.className = 'element'
element1.id = 'first';

const root = document.getElementById('root');
root.append(element1);