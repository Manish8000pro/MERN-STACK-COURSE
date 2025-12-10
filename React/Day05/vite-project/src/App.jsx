import { useEffect, useState } from "react";

function App(){

  const [Users,setUsers]=useState([])
  const [name,setName] = useState("")

  useEffect(()=>{


    async function GithubProfile() {
    const response = await fetch("https://api.github.com/users")
    const data = await response.json();
    setUsers(data);
    console.log("Hello")
  }

    GithubProfile();
    
  },[])

  function handleChange(e){
    setName(e.target.value.toUpperCase());
  }

  

  return(
    <>
    <h1>Github Users </h1>
    <input type="text" value={name} onChange={handleChange} />
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
    {
      Users.map(Users=>(
        <img src = {Users.avatar_url} height={"100px"} width={"100px"} key={Users.login} />
      ))
    }
    </div>
    </>
  )
}

export default App;