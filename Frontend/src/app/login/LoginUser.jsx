import React, { useState } from 'react'

const LoginUser = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleChange = async(e)=>{
    let result = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({email,password})
        })
        result = await result.json();
        console.log(result)
  }

  return (
    <div>
      <input type="text" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleChange}>Add</button>
    </div>
  )
}

export default LoginUser
