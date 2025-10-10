// functions 

// function gretting(){
//     console.log("Hello Coder Army, Strike is Coming on 18 October")
// }

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3;
//     console.log(sum);
// }

// rest operator 
// function addNumber(...num){
//     let sum = 0;
    
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// gretting();
// addNumber(5,7);
// addNumber(2,3,5)
// addNumber(44,6,8,0)

// const arr = [10,29,40,50,70]

// const [first,second,...num] = arr;
// console.log(first,second,num);


// function addNumber(num1,num2){
//         return(num1+num2)
// }
// console.log(addNumber(3,4))



// const addNumber = function(num1,num2){
//     return(num1+num2);
// }
// console.log(addNumber(4,3))

// arrow function

// const addNumber = (num1,num2)=>{
//     return num1+num2;
// }

// const addNumber = (num1,num2)=> num1+num2;

// if we have single parameter no need this  ()
// const squareNumber = num => num*num;


// console.log(addNumber(5,5));
// console.log(squareNumber(5))

// const gretting = () =>{
//     return{
//         name:"Manish",
//         age: 20,
//     }
    
// }

// const gretting = () =>({name:"Manish", age: 20,})

// console.log(gretting());

// IIFE

// (function gretting(){
//     console.log("Hello Ji")
// })();

// (()=>{
//     console.log("Hi")
// })();

// Callback function 

function greet(){
    console.log("Hello ji kese ho")
}

function dance(){
    console.log("I am dancing")
}

function meet(Callback){
    console.log("I am going to meet someone")
    Callback();  //(function is reusable)

    console.log("I have finished meeting")
}
meet(greet);
meet (dance);