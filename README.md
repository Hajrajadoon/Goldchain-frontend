# goldchain-frontend

Demo React frontend (Vite + Tailwind) for **Transparent Gold Financial System**.

## What it includes
- Landing + Shariah overview
- Signup / Login
- Dashboard with real-time gold price (polling backend)
- NFT minting UI (calls backend /mint-nft)
- Investor dashboard showing vaults

## Quick setup (local)
1. Install dependencies:
   ```
   npm install
   ```
2. Create `.env` in the project root:
   ```
   VITE_BACKEND_URL=http://localhost:5000
   ```
3. Run dev server:
   ```
   npm run dev
   ```

## Deploy to Netlify
- Push to GitHub
- New site from Git -> select repo
- Build command: `npm run build`
- Publish directory: `dist`
- Set env var `VITE_BACKEND_URL` in Netlify site settings.

## Notes
- Replace demo endpoints with production backend when ready.
- Use IPFS for NFT metadata (metadataUrl) for permanence.
