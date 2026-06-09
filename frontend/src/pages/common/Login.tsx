
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    async function submitHandler (e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
    
        try{
            const response = await fetch(`http://localhost:3000/auth/login`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                email,
                password,
                }),
            });
            
            const data = await response.json()

            if(data.user.role === "ADMIN"){
                navigate("/admin");
            }else{
                navigate("/user")
            }

            }catch(error){
                console.log(error)
            }
      }
    return(
    <div>
        <h1 className='font-semibold text-2xl text-center'>Login</h1>
        <div className='w-sm h-auto m-auto'>
        <form action=""
        className='flex flex-col space-y-6'
        onSubmit={submitHandler}
        >
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
                <Link to="/register" className='cursor-pointer'>
                    or Sign up
                </Link>
          </div>
        </form>
        </div>
    </div>
  )
}
