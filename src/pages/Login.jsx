import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate()
  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    }catch(err){
      alert('Login failed: ' + (err.response?.data?.message || err.message))
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form className="w-full max-w-md card" onSubmit={submit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <label className="block mb-2">Email<input className="w-full p-2 rounded mt-1 text-black" value={email} onChange={e=>setEmail(e.target.value)}/></label>
        <label className="block mb-4">Password<input type="password" className="w-full p-2 rounded mt-1 text-black" value={password} onChange={e=>setPassword(e.target.value)}/></label>
        <button className="w-full bg-gold py-2 rounded text-black">Login</button>
      </form>
    </div>
  )
}
