import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NFTMint from '../shared/NFTMint'

export default function Dashboard(){
  const [goldPrice, setGoldPrice] = useState(null)
  const [balance, setBalance] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){ navigate('/login'); return }
    const fetchData = async ()=>{
      try{
        const res = await axios.get(import.meta.env.VITE_BACKEND_URL + '/gold-price')
        setGoldPrice(res.data.price)
        const prof = await axios.get(import.meta.env.VITE_BACKEND_URL + '/profile', { headers: { Authorization: 'Bearer ' + token }})
        setBalance(prof.data.gold || 0)
      }catch(err){
        console.error(err)
      }
    }
    fetchData()
    const id = setInterval(fetchData, 5000)
    return ()=>clearInterval(id)
  },[])

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto card">
        <h2 className="text-2xl text-gold mb-2">Dashboard</h2>
        <p className="mb-4">Gold Price (per gram): <strong>{goldPrice ? 'USD ' + goldPrice : 'Loading...'}</strong></p>
        <p className="mb-4">Your Gold Balance: <strong>{balance} grams</strong></p>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-gold rounded text-black">Buy Gold</button>
          <button className="px-4 py-2 border border-gold rounded" onClick={()=>navigate('/investor')}>Investor Dashboard</button>
        </div>
        <hr className="my-4"/>
        <h3 className="text-lg mb-2">NFT Minting (Gold Certificate)</h3>
        <NFTMint/>
      </div>
    </div>
  )
}
