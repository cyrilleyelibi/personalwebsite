# personalwebsite

Portfolio site for Cyrille Yelibi — junior software engineer. Built with Next.js, React, and Tailwind (dark blue theme). Deployment-ready for Vercel/Netlify.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your PDFs

Put these files in **`public/documents/`** (create the folder if needed):

- **`Updated Cyelibi_resume.pdf`** — resume (thumbnail + download on site)
- **`LLM Food data & Graph Analysis.pdf`** — Gemini study report (download link on Projects)
- **Secure Coding report** — when ready, add your PDF and set the filename in `components/Projects.tsx` (`reportPdfUrl` for the secure-coding project)

## Checkpoints

See **`CHECKPOINTS.md`** for a step-by-step “what we did” summary of the build (tutorial-style).

## Chatbot (Gemini)

The floating chatbot UI is in place. To enable real responses:

1. Get a [Gemini API key](https://ai.google.dev/).
2. Add it via an environment variable (e.g. `NEXT_PUBLIC_GEMINI_API_KEY` or a server-side `GEMINI_API_KEY`) and wire it in an API route that calls the Gemini API.
3. Point the chatbot component to that API route.

## Deploy

- **Vercel**: Connect the repo and deploy (default Next.js preset).
- **Netlify**: Use the Next.js runtime; build command `npm run build`, publish directory `.next` (or use the Next.js plugin).
