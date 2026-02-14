# Checkpoints — What We Did

This file summarizes the build process step by step so you can use the project as a tutorial.

---

## Checkpoint 1: Next.js app + layout and assets folder

**What we did**

- Initialized a **Next.js 14** app with **TypeScript**, **Tailwind CSS**, and the **App Router** (no `create-next-app` in-place to avoid overwriting your existing files).
- Set up **dark blue theme** in Tailwind (`navy-950` through `navy-300`) and in `app/globals.css`.
- Created **`app/layout.tsx`**: root layout with metadata (title, description), Nav, main content, Footer, and ChatbotWidget.
- Created **`app/page.tsx`**: single-page structure with sections Hero, Skills, Projects, Resume, Contact.
- Added **`public/documents/`** for PDFs (resume, study report, secure-coding report) and a `.gitkeep` with a short reminder of which files to add.

**Reminder**  
Add these files to `public/documents/` when you’re ready:

- `Updated Cyelibi_resume.pdf`
- `LLM Food data & Graph Analysis.pdf`
- Secure Coding report PDF (when ready)

---

## Checkpoint 2: Nav, Footer, Hero, Skills

**What we did**

- **Nav** (`components/Nav.tsx`): Sticky header, site title, smooth links to #about, #skills, #projects, #resume, #contact; mobile hamburger menu.
- **Footer** (`components/Footer.tsx`): Copyright, links to LinkedIn and GitHub.
- **Hero** (`components/Hero.tsx`): About section with your name, “Junior Software Engineer” tagline, short bio (scalable problem-solving, CI/CD, Agile, eager to learn), and CTAs to projects and contact.
- **Skills** (`components/Skills.tsx`): Four groups—Coding, Web & APIs, Tools & Practices, Security (including “Secure coding & vulnerability awareness (see project)”).

---

## Checkpoint 3: Projects, Resume, Contact, Chatbot

**What we did**

- **Projects** (`components/Projects.tsx`): Three project cards:
  1. **Gemini LLM study**: description, tech badges, note that the site’s chatbot uses the same approach, link to GitHub (placeholder), link to download study report PDF.
  2. **Travlr (CS-465)**: MEAN stack description, GitHub link (placeholder), placeholder area for screenshots.
  3. **Secure Coding (CS-405)**: description, link to download report PDF (placeholder path).
- **Resume** (`components/Resume.tsx`): Thumbnail preview (PDF object with fallback) and “Download resume” button for `Updated Cyelibi_resume.pdf`.
- **Contact** (`components/Contact.tsx`): Contact form (name, email, message), front-end only; note that “Backend/email integration will be added later”; simple “thank you” state on submit.
- **Chatbot** (`components/ChatbotWidget.tsx`): Floating widget (bottom-right); open/close panel; message list and input; placeholder response when Gemini API is not configured.

---

## Next steps (you or a future session)

- Add your PDFs to `public/documents/`.
- Replace placeholder `githubUrl` in `components/Projects.tsx` for the Gemini study and Travlr.
- Add Travlr screenshots (or video link) and optional live demo URL.
- Configure Gemini API key and wire the chatbot to your backend/API route.
- Deploy (e.g. Vercel or Netlify).
