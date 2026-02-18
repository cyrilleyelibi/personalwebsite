# personalwebsite

Portfolio site for Cyrille Yelibi — junior software engineer. Built with Next.js, React, and Tailwind (dark blue theme). Deployment-ready for Vercel/Netlify.

## Run locally

**Always run from the project root** (the folder that contains `app/` and `package.json`):

```bash
cd personalwebsite   # if you're in a parent folder
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (not `.../404`).

**If you see 404 at the home page:** Run once with a clean cache:

```bash
npm run dev:clean
```

Then use `npm run dev` as usual. The `dev` script checks that you're in the project root and will error with instructions if not.

## Add your PDFs

Put these files in **`public/documents/`** (create the folder if needed):

- **`Updated Cyelibi_resume.pdf`** — resume (thumbnail + download on site)
- **`LLM Food data & Graph Analysis.pdf`** — Gemini study report (download link on Projects)
- **Secure Coding report** — when ready, add your PDF and set the filename in `components/Projects.tsx` (`reportPdfUrl` for the secure-coding project)

## Checkpoints

See **`CHECKPOINTS.md`** for a step-by-step “what we did” summary of the build (tutorial-style).

## Chatbot (Gemini)

The floating chatbot calls **`/api/chat`**, which uses the Gemini API. To enable real responses:

1. Get a [Gemini API key](https://ai.google.dev/).
2. Set **`GEMINI_API_KEY`** via environment (see Security below)—never put the key in code or commit it.
3. Restart `npm run dev`. The chatbot will send messages to Gemini and show replies. Without the key, it shows a short “not configured” message.

## Security (API key)

The Gemini API key is **never** in source code or the repo. It is read only from the environment at runtime.

- **Local**: Use **`.env.local`** (already in `.gitignore`). Add `GEMINI_API_KEY=your_key_here`. Never commit this file.
- **Production**: Use a **secure secrets system** and inject the key at deploy/runtime so it never lives in the codebase:
  - **Vercel**: Project → Settings → Environment Variables. Add `GEMINI_API_KEY` (secret). It is injected at build/runtime only.
  - **Netlify**: Site → Build & deploy → Environment. Add `GEMINI_API_KEY` and mark as secret.
  - **AWS**: Use Secrets Manager or SSM Parameter Store; inject into the runtime (e.g. Lambda env, ECS task definition).
  - **Azure**: Use Key Vault or App Configuration; reference the secret in your app’s config so it’s loaded at runtime.

Even if someone reverse‑engineers or inspects your code, they will not see the key—only that the app expects `GEMINI_API_KEY` from the environment.

## Deploy

### Netlify (prototype)

1. Push your code to GitHub and connect the repo in [Netlify](https://app.netlify.com): **Add new site → Import an existing project**.
2. Netlify will detect Next.js; the repo’s **`netlify.toml`** sets the build command and Node version. No extra config needed.
3. **Environment variable:** In Netlify → **Site settings → Environment variables**, add **`GEMINI_API_KEY`** (secret) so the chatbot works in production.
4. Deploy. Your site will be at `https://<random>.netlify.app` (or your custom domain).

**If you see "Page not found" on Netlify:** The repo’s `netlify.toml` enables `@netlify/plugin-nextjs` so the Next.js app is served (not a static folder). After pulling the latest code, trigger a new deploy. If it still fails, in Netlify go to **Deploys** → open the latest deploy → check **Build log** for errors.

### Vercel

- Connect the repo and deploy (default Next.js preset). Set **`GEMINI_API_KEY`** in Project → Settings → Environment Variables.
