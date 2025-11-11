// async await Function 
// async Function always return a Promise
// async function greet(){
//     // return "Manish";
//     return new Promise((resolve,reject)=>{
//         reject("Manish")
//     })
// }
// const response = greet();
// // console.log(response)
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:",error);
// })


// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));

async function github() {
    try{
        const response = await fetch("https://api.github.com/users")

        if(!response.ok){
            throw new Error("Data is no persent")
        }
        
        const data = await response.json();
        // console.log(data);

        const parent = document.getElementById("first")

       for(let user of data){
       const element =  document.createElement("div")
       element.classList.add("user")

       const image = document.createElement('img');
       image.src = user.avatar_url;

       const userName = document.createElement('h2')
       userName.textContent = user.login;

       const anchor = document.createElement('a')
       anchor.href = user.html_url;
       anchor.textContent = "Visit Profile"

       element.append(image,userName,anchor);

       parent.append(element)
    }
    }
    catch(error){
        console.log("error");
    }
    
}

github();

// console.log("Hello ji Kese Ho")