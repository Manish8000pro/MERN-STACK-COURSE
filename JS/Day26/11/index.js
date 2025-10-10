// Scope and Closure , HOF
// Globel Scope => accesible to everyone
// Functional Scope => accesible only to that function
// Block level Scope => accesible only to that Block
// let a = 10;
// const b = 20;

// if(true){
//     console.log(b)
// }

// function greet(){
//    let c = 30; 
//    console.log(c)
// }
// // console.log(c)
// greet();

// let Globel = 30;

// function greet(){
//     // console.log(Globel)
//     let Globel = 10;

//     function meet(){
//         console.log(Globel)
//     }
//     meet();
// }
// greet();


// function createCounter(){

//     let count = 0;

//     function increment(){
//         count++;
//         return count;
        
//     }
//     return increment;
// }
// const count = createCounter();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// balance = 500;

// balance+=balance


// console.log(balance)

// let balance = 500;

// const user = {
//     deposit: function (amount){
//         if(typeof amount == "number" && amount>0){
//             balance+= amount;
//             return balance;
//         }
        
//     },
//     withdraw: function (amount){
//         if(typeof amount == "number" && amount>0 && balance>=amount){
//         balance-= amount;
//         return balance;
//         }
//     },
//     getBalance: function(amount){
//         return balance;
//     }
// }

// console.log(user.deposit(400));

// Private

// function creatBankAcconunt(){
//     let balance = 500;

//     const user = {
//         deposit: function (amount){
//         if(typeof amount == "number" && amount>0){
//             balance+= amount;
//             return balance;
//         }
        
//     },
//     withdraw: function (amount){
//         if(typeof amount == "number" && amount>0 && balance>=amount){
//         balance-= amount;
//         return balance;
//         }
//     },
//     getBalance: function(amount){
//         return balance;
//     }
// }

//     return user;
// }

// const comstumer = creatBankAcconunt();
// console.log(comstumer.deposit(300))

function double(Value){
    return function execute(num){
        return num*Value;
    }
}
const n = double(20)(5);
console.log(n);
