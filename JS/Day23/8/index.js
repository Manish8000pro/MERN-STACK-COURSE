// Objects

// key Value pair
// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Account: 300
// }
// console.log(typeof user)
//CRUD: Create , Read , Update,Delete;
// console.log(user.age)
// console.log(user["name"])
//Update 

// user.addhar = 33959;
// user.Account = 5000
// console.log(user)

//delete
// delete user.EmailId;
// console.log(user);


// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Account: 300
// }

// const user2 = user
// user2.age = 20
// console.log(user2)

// Important

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let keys in user){
//     console.log(keys, user[keys])
// }


// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Ammount: 300
// }

// Object Ko Destructring krna
// const {name:userName,age:userAge} = user;
// console.log(userName,userAge)

// const arr = [20,49,69,40,50];
// const [first,second] = arr
// console.log(first,second)

// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Ammount: 300
// }

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

// for of loop arry ke uper
// for(let values of Object.values(user)){
//     console.log(values);
// }

// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Ammount: 300,
//     gretting: function(){
//         console.log(`Strike is comming on 18 oct. ${this.name}`);
//         return 70;
//     }
// }

// const user2 = {
//     name:"Mohan",
//     acconut:944,
//      gretting: function(){
//         console.log(`Strike is comming on 18 oct. ${this.name}`);
//         return 70;
//     }
// }

// const va = user.gretting();
// console.log(va)
// user2.gretting();

// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Ammount: 300,
//     address:{
//         city:"Palsana",
//         state:"Rajasthan"
//     }
// }
// console.log(user.address.city)

// const user = {
//     name:"Manish",
//     age: 21,
//     EmailId:"mani@gmail.com",
//     Ammount: 300,
//     address:{
//         city:"Palsana",
//         state:"Rajasthan"
//     }
// }

// Shallow copy
// const user2 = {...user};
// user2.name = "Mohan";
// // console.log(user2)

// user2.address.city = "Dwarika"
// console.log(user)

// Deep Copy


// const user2 = structuredClone(user);
// user2.address.city = "Dwarika";
// console.log(user2)

// KeY ; String || Symbol

const sym = Symbol("id");
const user = {
    name:"Manish",
    age:20,
    0:200,
    1:"mohan",
    [sym]: "Hello Ji"
}
console.log(user[sym])