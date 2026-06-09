
import React, { useState } from 'react'
import { Link } from "react-router-dom";

// type User = {
//   username: string;
//   email: string;
//   password: string;
// }

export default function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function submitHandler (e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()

    try{
      const response = await fetch(`http://localhost:3000/auth/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if(response.ok){
        window.location.reload();
      }
      
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='m-10'>
        <h1 className='font-semibold text-2xl text-center'>Register</h1>
        <div className='w-sm h-auto m-auto'>
        <form action=""
        className='flex flex-col space-y-6'
        onSubmit={submitHandler}
        >
          <div className='flex flex-col'>
            <label htmlFor="">Username</label>
            <input className='border border-gray-400 rounded-md outline-0 px-2 py-1 bg-gray-200' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Your email</label>
            <input className="border border-gray-400 rounded-md px-2 py-1 outline-0 bg-gray-200" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Your password</label>
            <input 
            type="password"
            name='password'
            id='password'
            value={password}
            className='border border-gray-400 rounded-md px-2 py-1 outline-0 bg-gray-200' 
            onChange ={(e) => setPassword(e.target.value)}
            />
            
          </div>
          <div>
            <button type='submit'
            className='border px-4 py-1 rounded-lg bg-blue-600 text-white cursor-pointer'
            >Submit</button>
            <Link to="/login">
              <button
              type='submit'
              className='text-zinc-500 cursor-pointer'
              >
                or Login
              </button>
            </Link>
          </div>
        </form>
        </div>
    </div>
  )
}
