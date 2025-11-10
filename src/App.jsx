import { Link } from 'react-router-dom'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">Transparent Gold Financial System</h1>
      <p className="mb-6 text-center text-gray-300 max-w-xl">
        Demo frontend for your pitch. Use Login/Signup to reach Dashboard. Includes Shariah compliance info.
      </p>
      <div className="space-x-4">
        <Link className="px-4 py-2 bg-gold text-black rounded" to="/signup">Sign Up</Link>
        <Link className="px-4 py-2 border border-gold rounded" to="/login">Login</Link>
      </div>
      <div className="mt-8 max-w-2xl card">
        <h2 className="text-xl text-gold mb-2">Shariah Compliance (Overview)</h2>
        <p className="text-gray-300">This platform is designed to be asset-backed, avoid interest, and include transparent ownership proofs suitable for Islamic finance audiences. For full compliance, consult a Shariah adviser.</p>
      </div>
    </div>
  )
}
