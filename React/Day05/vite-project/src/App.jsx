import { useState } from "react";

function App(){

  const [Users,setUsers]=useState([])

  async function GithubProfile() {
    const response = await fetch("https://api.github.com/users")
    const data = await response.json();
    setUsers(data);
  }

  GithubProfile();

  return(
    <>
    <h1>Github Users </h1>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
    {
      Users.map(Users=>(
        <img src = {Users.avatar_url} height={"100px"} width={"100px"} />
      ))
    }
    </div>
    </>
  )
}

export default App;