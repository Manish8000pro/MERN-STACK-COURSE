// forEach , filter , reducer , map , set

// const arr = [10,20,30,4,55,50 ,80, 60, 70]
// let sum = 0;

// arr.forEach((Number)=>{
//     sum= sum+Number;
// })
// console.log(sum)

// filter

// const arr =[10,20,30,4,55,50 ,80, 60, 70]
// const newArr = arr.filter((number)=> number>25)
// console.log(newArr)

// const arr = [10,20,30,4,55,50 ,80, 60, 70]

// arr.filtering = function(compare){
//     let ans = [];
//     for(let num of this ){
//         if(compare(num)){
//             ans.push(num)
//         }
//     }
//     return ans;
// }
// const newArr = arr.filtering((num)=> num<25)
// console.log(newArr);


// const arr = [10,20,30,40,77]
// const newArr = arr.map((num)=>num/2)
// console.log(newArr)

// Data Structure: Set

// const arr = [10,20,30,15,23,10,20,15]


// const s1 = new Set(arr)
// // s1.add(11)
// // console.log(s1.has(20))
// s1.delete(10)
// console.log(s1)
// console.log(s1.size)


// const email = ["man@gm","din@gm", "man@gm","din@gm"]
// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);

// const s1 = new Set(email);  
//  for(let num of s1){
//     console.log(num)
// }



// Map

const m1 = new Map([
    ["Rohit", 40],
    [3,"dinesh"],
    [true,22],
    [20,50,60,"Shree"]
])

m1.set({name:"Manish",age:20},true)
// console.log(m1.has("Rohit"))
// console.log(m1.clear)
// console.log(m1.size)

for (let[keys,value] of m1){
    console.log(keys,value)
}