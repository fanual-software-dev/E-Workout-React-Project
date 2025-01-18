import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const navigate = useNavigate()

    const loginfunc = async (e)=>{

        e.preventDefault()

        if ( !email || !password ){
            setError(true)
            setLoading(false)
            return
        }

        try {
            setLoading(true)
            setError(false)

            const User = await fetch('/user/login',{
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{
                    'Content-Type':'application/json'
                }
            })

            const userData = await User.json()

            console.log(userData,"Here is the user Data")

            if (User.ok){
                setLoading(false)
                setError(false)
                setEmail('')
                setPassword('')

                localStorage.clear()
                localStorage.setItem('UserData',JSON.stringify(userData))
                navigate('/workouts')
                return
                
            }
            
        } catch (error) {
            setError(true)
            setLoading(false)
        }


    }
  return (
    <div className='form-div'>
      <form onSubmit={loginfunc}>
        <p>Log In</p>
        <label>Email Address</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email'/>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password'/>
        <button type='submit' disabled={loading}>{loading?"Loading":"LOG IN"}</button>
        {error&&<p className='error'>Login failed. Check your username and password.</p>}
      </form>
    </div>
  )
}

export default Login
