import React, { useState } from 'react'
function Login() {
    const [userName,setUserName]= useState('');
    const [Password,setPassword]= useState('');
    const formHandler=(event)=>
    {
        event.preventDefault();
        const loginobj={
            name:userName,
            pwd:Password
    }
    console.log(loginobj);
    alert(JSON.stringify(loginobj));
}
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={userName} placeholder=" Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
    Password : <input type="Password" value={Password} placeholder=" Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button type="submit"> Login </button>
    </form>
    </div>
  )
}

export default Login
