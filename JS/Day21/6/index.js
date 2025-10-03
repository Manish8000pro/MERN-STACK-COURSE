// String 

// const str1 = "Manish"
// const str2 = 'Dinesh'
// const day = 18 
// const str3 = `Strike is comming on ${day}`

// console.log(str1,str2,str3)
// console.log(str3)

// const str = `hello coder army`
// console.log(str.length)
// console.log(str[6])

// // UPPER CASE


// console.log(str.toUpperCase())

// // Lower case 

// console.log(str.toLowerCase())

// const str = `Hello coder Army coder`
// console.log(str.indexOf('cod'))
// console.log(str.lastIndexOf('cod'))
// console.log(str.includes('Cod'))


// slice
// console.log(str.slice(3,9))
// console.log(str.slice(6))
// console.log(str.slice(6))
// console.log(str.slice(-6,-2))

// const str = `Hello coder Army coder`

// console.log(str.substring(2,8))

// const a = "Manish"
// const b = " Kumawat"
// const c = a+b;
// console.log(c)


// const str = `Hello coder Army coder`
// console.log(str.replace('er', 'ing'))

// const user = " Manish Kumawat "
// console.log(user.trim())

// const names = "Manish,Dinesh,Mamta, suraj, bhanu"
// console.log(names.split(","))

// Date obect

// const now = new Date();
// console.log(now.toString())
// console.log(now.toISOString())
// console.log(now.toLocaleString())
// console.log(now.toLocaleTimeString())
// console.log(now.toLocaleDateString())

// const now = new Date();

// These outputs according to the local time 
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())


// Days ; Mon , Tue : 1 based 

// Month : 0 based

// const now = new Date(2025,8,17,17,25,134)
// console.log(now.toString())

const now = Date.now()
const dates = new Date(155578123698)
// console.log(dates.toString())
// dates.setMonth(4)
// dates.setHours(22)
console.log(dates.toLocaleString())

// 1759407386048