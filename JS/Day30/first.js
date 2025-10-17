// function handleClick(){
//     const element = document.getElementById("first")
//     element.textContent = "Strike Is Coming"
// }

// const element = document.getElementById("first")

// element.onclick = function handleClick(){
//     element.textContent = "Strike is Coming" //// This is override the text content so that's is not perfect 
// }

// element.addEventListener('click',()=>{
//     element.textContent = "I am the Best"
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor = "green"
// })


// const child1 = document.getElementById("child1")

// child1.addEventListener('click',()=>{
//     child1.textContent = "I am Clicked"
// })

const parent = document.getElementById("parent")

function handleClick(e){
    e.target.textContent = "I am clicked"
    parent.removeEventListener('click',handleClick)
}

parent.addEventListener('click',handleClick)



// parent.addEventListener('click',(e)=>{
//     // console.log(e)
//     e.target.textContent = "I am Clicked"
// })


// console.log(parent.children)

//     for(let child of parent.children){
//         child.addEventListener('click',()=>{
//             child.textContent = "I am clicked"
//         })
//     }


// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target)
//     // console.log("grandparent is clicked")
// })

// const parent = document.getElementById("parent")
// parent.addEventListener('click',(e)=>{
//     console.log(e)
//     // console.log("parent is clicked")
// })

// const child = document.getElementById("child")
// child.addEventListener('click',(e)=>{
//     console.log(e)
//     e.stopPropagation();
//     // console.log("child is clicked")        //// Capture Phase: On hai tab Top se down aaoge us time event triger honge
//                                            //// Capture Phase off h tab Down se up Javoge us time (Bubbling Phase me Hoga ) 
// })