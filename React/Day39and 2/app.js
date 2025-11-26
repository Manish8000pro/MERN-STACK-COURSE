
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");


// const element2 = React.createElement('div',null,
//     React.createElement('h1',null,"HELLO"),
//     React.createElement('h2',null,"Hi"))

// JSX: JavaScript XML: look like HTML

// const element = <h1 id="title">Hello Coder Army</h1>

// const element2 = (<div>
//     <h1>Hi</h1>
//     <h2>Coders</h2>
// </div>) 


// React Element
// const element3 = (<div>
//     <h1>Hello coder Army</h1>
//     <h2>Kese ho </h2>
// </div>)


// React componant 

// function App(name){

//     return(
//         <h1>Hello world! {name} </h1>
//     );
// }

// const a = App("Manish");
// Number , String , true , false , null , undefined , array , Object 
// Number , String , Array 
// False , Null , Undefined --> render to honge lakin kuch dikhayi nhi dega 
// Object ==> Error

// const islogedIn = true;

// const element = <h1>Hello coder {islogedIn?<h2>LogedIn</h2>:<h2>Kindly signIn</h2>}</h1>

// const courses = ["HTML","CSS","Javascript","React"]
// [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]

// const element = (
//     <ul>
//         {courses.map(course=><li>{course}</li>)}
//     </ul>
// )

// const ab = {backgroudColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello world</h1>

// function App(props){

//     return(
//         <h1>Hello coders {props.name} {props.age} </h1>
//     )
// }

// const element = <App name= "Manish" age={22}></App>

function Header({name}){

    return(
        <h1>{name}Welcome to Indian Election Commission</h1>
    )
}

function Main(user){

    return(
        <>
        <h2>Hi{user.name}</h2>
        <h3>{user.age>18? "You are eligible for vote": "You are not eligible for vote"}</h3>
        <p>Your City is {user.city}</p>
        </>
    )
}

function Footer(){

    return(
        <h3>Thanks for Visiting Our Website</h3>
    )
}

function App(){

    return(
        <>
        <Header name="Manish"></Header>
        <Main user={{name:"Manish",age:"22",city:"sikar"}}></Main>
        <Footer></Footer>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App());