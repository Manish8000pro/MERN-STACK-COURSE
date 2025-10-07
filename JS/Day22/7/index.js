// Array

// let marks1 = 50;
// let marks2 = 70;
// let marks3 = 80;


// let marks = [70,30,75,90,33,67]
// console.log(marks.length)
// let arr = [50,88, "Manish",true]
// // console.log(arr[1])
// // console.log(typeof arr)
// arr[1] = 90;
// console.log(arr);

// //push: insert element at end

// arr.push(55)
// arr.push("Strike")
// console.log(arr)

// //pop operations:

// // arr.pop()
// // console.log(arr)

// // Starting add kr sakta hu, delete the elemnt at the first place

// arr.unshift(60);
// console.log(arr)

// // Delete kr sakta hu
// arr.shift()
// console.log(arr)

// let arr = [10,20, 11,50,44,78]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// object(non primitive) : copy by reference hote h
// Primitive : copy by value hote h
// let arr = [10,20, 11,50,44,78]
// let arr2 = arr;
// arr2.push(30)
// console.log(arr)

// const arr = [10,20, 11,50,44,78]
// const arr2 = arr.slice(2,4)
// console.log(arr2)
// const arr3 = arr.splice(1,3,"manish",22);
// console.log(arr)

// const arr = [10,20, 11,50,44,78]
// const arr2 = ["Manish",22,true]
// const arr4 = ["Dinesh","Mamta",20]
// const arr3 = arr.concat(arr2,arr4);

// Sprad operator
// const arr3 = [...arr,...arr2,...arr4]
// console.log(arr3)

const names = ["Manish", "Charlie","Alice","Guru", "Rama", "Alice"];

// console.log(names.toString())
// console.log(names.join("-"))
// console.log(names.lastIndexOf("Alice"))
// console.log(names.includes("Alice"))

names.sort();
console.log(names)