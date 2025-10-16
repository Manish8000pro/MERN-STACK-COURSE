// console.log("Hello Coders")


const newElement = document.createElement("h2");
newElement.textContent = "Strike is Coming"
newElement.id = "second"

// select 
const element = document.getElementById("first")
element.after(newElement)

const newElement2 = document.createElement("h3")
newElement2.textContent = "Diwali aa rhi h";
newElement2.id = "third"
// newElement2.className = "diwali"
// newElement2.className+= " Holi"
newElement2.classList.add("diwali")
newElement2.classList.add("Holi")
// newElement2.classList.remove("Holi")

// newElement2.style.backgroundColor = "brown"
// newElement2.style.fontSize = "40px"

// element.before(newElement2)

// console.log(newElement2.getAttribute("id"))

// const list = document.createElement("li")
// list.textContent = "Ghee"
// const list2 = document.createElement("li")
// list2.textContent = "Milk"
// const list3 = document.createElement("li")
// list3.textContent = "Paneer"
// const list4 = document.createElement("li")
// list4.textContent = "Halwa"

// const unorderElement = document.getElementById("listing")

// unorderElement.append(list,list2)
// unorderElement.prepend(list3)

// list.after(list4)


const arr = ["Milk","Panner","Halwa","Tofu","Tea"]
const unorderElement = document.getElementById("listing")
const fragment = document.createDocumentFragment();
for(let food of arr){
    const list = document.createElement("li")
    list.textContent = food;
   fragment.append(list)
}

 unorderElement.append(fragment)

 // How to Delete

 const s1 = document.getElementById("second")
 s1.remove()

 const month = document.getElementById("ten");
//  console.log(month.children)

const lister = document.createElement("li")

lister.textContent = "Help";    // That is the safe
lister.textContent = "<img src = 'https: pjd '>";


// lister.innerHTML = "<img src = 'https: pjd '>" // This is not safe for user
month.prepend(lister) 