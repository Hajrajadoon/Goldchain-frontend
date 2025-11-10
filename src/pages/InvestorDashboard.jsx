import { useEffect, useState } from 'react'
import axios from 'axios'

export default function InvestorDashboard(){
  const [vault, setVault] = useState({ total: 0, locations: [] })
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(import.meta.env.VITE_BACKEND_URL + '/vault')
        setVault(res.data)
      }catch(err){
        console.error(err)
      }
    }
    fetchData()
  },[])
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto card">
        <h2 className="text-2xl text-gold mb-4">Investor Dashboard</h2>
        <p>Total Gold in Vaults: <strong>{vault.total} grams</strong></p>
        <ul className="mt-4 space-y-2">
          {vault.locations.map((l,i)=><li key={i} className="p-3 bg-gray-800 rounded">{l.name}: {l.grams} g — {l.location}</li>)}
        </ul>
      </div>
    </div>
  )
}
