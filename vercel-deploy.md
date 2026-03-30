Vercel Deployment Notes

- Framework: Next.js
- Root Directory: (leave blank)
- Build Command: `npm run build`
- Output Directory: (leave blank; Next.js will handle)
- Environment variables: add any API keys for LLM providers (e.g., GEMINI_API_KEY) via Project Settings → Environment Variables.

Set `NODE_ENV=production` for production builds.
