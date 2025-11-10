import { useState } from 'react'
import axios from 'axios'

export default function NFTMint(){
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [metadataUrl, setMetadataUrl] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const mint = async ()=>{
    setMessage('')
    setResult(null)
    setLoading(true)
    try{
      const token = localStorage.getItem('token')
      if(!token) { setMessage('Please login first'); setLoading(false); return }

      const payload = { name: name || 'Gold Certificate', desc, metadataUrl }
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL + '/mint-nft', payload, {
        headers: { Authorization: 'Bearer ' + token }
      })
      setResult(res.data)
      setMessage('Mint successful!')
    }catch(err){
      console.error(err)
      setMessage('Mint failed: ' + (err.response?.data?.message || err.message))
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="mt-2">
      <input className="w-full p-2 mb-2 text-black rounded" placeholder="Certificate name" value={name} onChange={e=>setName(e.target.value)}/>
      <textarea className="w-full p-2 mb-2 text-black rounded" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)}/>
      <input className="w-full p-2 mb-2 text-black rounded" placeholder="Metadata URL (optional - e.g. IPFS link)" value={metadataUrl} onChange={e=>setMetadataUrl(e.target.value)}/>
      <button className={`px-4 py-2 ${loading ? 'opacity-60' : ''} bg-gold text-black rounded`} onClick={mint} disabled={loading}>
        {loading ? 'Minting...' : 'Mint NFT (Gold Certificate)'}
      </button>
      <p className="mt-2 text-green-300">{message}</p>
      {result && (
        <div className="mt-3 bg-gray-800 p-3 rounded">
          <p>Asset ID: <strong>{result.assetId}</strong></p>
          <p>Tx ID: <a className="text-gold" href={`https://testnet.algoexplorer.io/tx/${result.txId}`} target="_blank" rel="noreferrer">{result.txId}</a></p>
          <p>View Asset: <a className="text-gold" href={result.explorerUrl} target="_blank" rel="noreferrer">AlgoExplorer (TestNet)</a></p>
        </div>
      )}
    </div>
  )
}
