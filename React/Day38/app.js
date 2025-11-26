

// Create a element using Js

// const element1 = document.createElement('h1');
// element1.textContent = "Hello Coder Army";
// element1.className = 'element'
// element1.id = 'first';
// element1.style.fontSize="30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";

// const element2 = document.createElement('h2');
// element2.textContent = "Hello World";
// element2.className = 'element'
// element2.id = 'second';
// element2.style.fontSize="20px";
// element2.style.backgroundColor = "green";
// element2.style.color = "black";


// Custom React
// const React = {
//     createElement: function(tag,attributes,children){
//     const element = document.createElement(tag)
//     element.textContent = children;

//     for (const key in attributes){
//         if (key==='style'){
//             Object.assign(element.style,attributes.style)
//         }
//         else{
//         element[key] = attributes[key];
//         }
//     }
//     return element;
//     }
// }

// const ReactDOM = {
//     render: function(child,parent){
//         parent.append(child);
//     }
// }

const React = {
   createElement(type,props,children){

    return {
        type:type,
        props:{
            ...props,
            children:children
        }
    }
} 
}

// const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children:"Hello Coder Army"
//     }
// }


const ReactDOM = {
    render:function(reactElement,root){

        root.innerHTML = '';

        const element = document.createElement(reactElement.type);

        const {props} = reactElement;

        for(const key in props){
            if(key==='style'){
                Object.assign(element.style,props.style);
            }
            else if(key==='children'){
                element.textContent = props[key];
            }
            else{
                element[key] = props[key];
            }
        }
        root.append(element);
    }
}

const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello coder army")
const element2 = React.createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"black"}},"Strike is launched")

const div = React.createElement('div',element1,element2,"Hello coders")

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(div);

console.log(div);

// ReactDOM.render(element1,document.getElementById('root'))
// ReactDOM.render(element2,document.getElementById('root'))


// const root = document.getElementById('root');
// root.append(element1);
// root.append(element2);
// const root = document.getElementById('root');
// ReactDOM.render(element1,root);
// ReactDOM.render(element2,root);