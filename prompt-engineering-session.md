# Prompt Engineering Session - Personal Portfolio Website

## Initial Request
I want to create a personal website. I am a junior software engineer and i want to make a portfolio website showcasing my skills and my different project. I want this website to say " young junior software engineer capable of scalable problem solving solutions and eager to learn familiar with CL/CD process with agile experience" this site will be for personal brand and experimentation.

## Revised Prompt (Version 1)

Create a personal portfolio website for a junior software engineer. The site should:

- **Core message**: Present the developer as a young junior software engineer capable of scalable problem-solving solutions, eager to learn, familiar with CI/CD processes, and with agile experience.
- **Purpose**: Personal branding and experimentation.
- **Content sections**:
  - About/Bio
  - Skills/Technologies
  - Projects (showcase multiple projects)
  - Contact information
- **Technical requirements**:
  - Modern, responsive design
  - Clean, professional UI
  - Easy to maintain and update
- **Tone**: Professional yet approachable, reflecting enthusiasm for learning and growth.

## Questions for Refinement

1. **Technology stack**: Do you have a preference? (React, Next.js, Vue, vanilla HTML/CSS/JS, or another framework?)
2. **Design style**: Any preferences? (minimalist, modern, dark mode, colorful, specific color scheme, etc.)
3. **Projects**: How many projects should be featured? Do you have project details ready (titles, descriptions, tech stacks, links, images)?
4. **Additional sections**: Do you want a blog, resume download, testimonials, or a contact form?
5. **Interactive elements**: Any animations, transitions, or interactive features?
6. **Hosting/deployment**: Should it be ready for deployment (e.g., GitHub Pages, Vercel, Netlify), or just the code?
7. **Timeline**: Is this urgent, or can we iterate?
8. **Inspiration**: Any portfolio sites you like that we should reference?

## Your Answers (Refinement Round 1)

1. **Technology stack**: React, Next.js
2. **Design style**: Dark blue theme. Some animation for transitions and background (e.g., person working on computer having fun)—low priority; unsure if it conveys the right message.
3. **Projects**: (1) Gemini LLM study—showcase + link to GitHub; (2–3) Two other projects to be chosen with AI help after sharing unofficial transcript; projects ready to embed as demos on the site.
4. **Additional sections**: Resume download, contact form.
5. **Interactive**: Chatbot powered by Gemini (user will set up; needs to be integrated).
6. **Deployment**: Ready to deploy when done; no rush.
7. **Timeline**: Iterate but try to be done ASAP.
8. **Inspiration**: https://rishirajsharma-portfolio.streamlit.app/
9. **Process**: Project should double as a tutorial of the whole process, with checkpoints along the way.

---

## Revised Prompt (Version 2)

Build a personal portfolio website for a junior software engineer using **React** and **Next.js**. The site should be deployment-ready (e.g., Vercel/Netlify), serve as a **tutorial of the build process** with **checkpoints** at key stages, and support iteration with a goal of finishing ASAP.

### Core message
Present the developer as a young junior software engineer capable of scalable problem-solving, eager to learn, familiar with **CI/CD** and **agile** experience. Use for **personal branding** and **experimentation**.

### Design
- **Theme**: Dark blue palette; clean, professional, responsive.
- **Animations**: Subtle transitions; optional background animation (e.g., person at computer)—lower priority; only if it supports the professional message.
- **Reference**: Take inspiration from https://rishirajsharma-portfolio.streamlit.app/ (layout, sections, tone).

### Content & sections
- **About/Bio** — professional yet approachable; enthusiasm for learning.
- **Skills/Technologies** — reflect CI/CD, agile, scalability, learning mindset.
- **Projects** (3 total):
  - **Project 1**: Gemini LLM study — highlight prominently, link to GitHub; support embedded demo if available.
  - **Projects 2 & 3**: To be chosen later (with AI) based on user’s unofficial transcript; support embedded demos.
- **Resume** — downloadable (e.g., PDF link/button).
- **Contact** — contact form.
- **Chatbot** — Gemini-powered chatbot; UI/UX in place; API/key setup left to user.

### Technical
- Next.js + React; modern, maintainable structure.
- Ready for deployment (e.g., Vercel/Netlify); no rush, but build with deploy in mind.
- Document or structure the project so the **build process is tutorial-friendly** with **clear checkpoints** (e.g., “Checkpoint 1: Next.js + layout,” “Checkpoint 2: Projects section + demos,” etc.).

### Tone
Professional, approachable, and growth-oriented.

---

## Follow-up Questions (Round 2)

1. **Checkpoints**: How do you want checkpoints delivered? (e.g., a `CHECKPOINTS.md` file in the repo, comments in code, a short “what we did” summary at each step, or tags/commits?)
2. **Gemini study project**: Do you have a title, 1–2 sentence description, tech stack, repo URL, and whether the demo is an iframe, link, or embedded app? (Can add placeholder text until you provide it.)
3. **Resume**: Will you supply a PDF path/URL, or should we add a “Download resume” button that points to a placeholder path you’ll replace later?
4. **Contact form**: Should submissions go to your email (e.g., via Formspree/Resend), or just front-end only for now with a note like “Backend/email integration to be added”?
5. **Chatbot placement**: Where should the chatbot live? (e.g., floating widget on all pages, or its own “Chat” page in the nav?)

Once you answer these, we can lock in **Revised Prompt (Version 3)** and start implementation.

---

## Your Answers (Refinement Round 2)

1. **Checkpoints**: A “what we did” summary per step.
2. **Gemini study project**: Use text-generation only to build a Chatbot. Embed the chatbot in the site; add link to GitHub of the study; explain that the chatbot is part of a study; link to download PDF of the study report. Other two projects to be chosen from transcript (see below).
3. **Resume**: “Download resume” button **under a thumbnail preview** of the resume; resume file: `Updated Cyelibi_resume.pdf` (to be placed in project for download).
4. **Contact form**: Front-end only with a note that backend/email integration will be added later.
5. **Chatbot**: Floating widget; try it and see how it fits with the rest of the site.

**Transcript reviewed**: SNHU BS Computer Science (Software Engineering), 120 credits. Resume lists three relevant projects.

---

## Suggested Projects from Transcript & Resume

Based on your transcript and resume, these **two additional projects** fit the portfolio well:

| # | Project | Why showcase |
|---|--------|----------------|
| **2** | **Full Stack Development (CS-465)** | MEAN stack (MongoDB, Express, Angular, Node); shows full-stack skills, design, version control—directly aligns with “scalable solutions” and modern web. |
| **3** | **Secure Coding (CS-405)** | Security focus, A grade; demonstrates secure coding practices and awareness of vulnerabilities—strengthens “software engineer” and “robust solutions” message. |

**Alternative for #3**: **Computer Science Capstone (CS 499)** — if you have a concrete deliverable (app, report, repo) you’d rather highlight than the Secure Coding coursework.

You can embed demos for CS-465 and CS-405 (or Capstone) as you prefer; placeholders are fine until you add links/demos.

---

## Revised Prompt (Version 3) — Final for implementation

Build a personal portfolio website for **Cyrille Yelibi** using **React** and **Next.js**. The site must be deployment-ready (e.g., Vercel/Netlify), double as a **tutorial** of the build process with a **“what we did” summary per step** at checkpoints, and support iteration (goal: finish ASAP).

### Core message
Present the developer as a young junior software engineer capable of **scalable problem-solving**, eager to learn, familiar with **CI/CD** and **agile**. Use for **personal branding** and **experimentation**.

### Design
- **Theme**: Dark blue palette; clean, professional, responsive.
- **Animations**: Subtle transitions; optional background animation (e.g., person at computer)—low priority; only if it supports the professional message.
- **Reference**: https://rishirajsharma-portfolio.streamlit.app/

### Content & sections
- **About/Bio** — professional, approachable, enthusiasm for learning (align with resume headline).
- **Skills/Technologies** — reflect resume (e.g., JavaScript/Node/React/Angular, C++, Python, SQL/NoSQL, AWS, Azure, CI/CD, Agile, JIRA, Git).
- **Projects** (3 total):
  1. **Gemini LLM study (SpinCityLab)**  
     - Embed a **chatbot** built with the study’s text-generation only.  
     - Short explanation that the chatbot is part of a study.  
     - Link to **GitHub** of the study project.  
     - Link to **download PDF** of the study report.  
  2. **Full Stack Development (CS-465)** — MEAN stack; link and/or embedded demo; description from resume.  
  3. **Secure Coding (CS-405)** — secure coding project; link and/or embedded demo; description from resume.  
     *(Or Capstone CS-499 if user prefers.)*
- **Resume**: **Thumbnail preview** of the resume + **“Download resume”** button that downloads the PDF (file: use `Updated Cyelibi_resume.pdf` in the project).
- **Contact**: **Contact form** (front-end only for now; visible note: “Backend/email integration will be added later”).
- **Chatbot**: **Floating widget** powered by Gemini (UI in place; user will configure API/key); evaluate how it looks with the rest of the site.

### Technical
- Next.js + React; modern, maintainable structure.
- Deployment-ready (Vercel/Netlify).
- **Checkpoints**: At key steps, add a “what we did” summary (e.g., in a `CHECKPOINTS.md` or dedicated section in the repo).

### Tone
Professional, approachable, growth-oriented.

### Assets to use
- **Resume PDF**: `Updated Cyelibi_resume.pdf` (copy into project for thumbnail + download).
- **Study report PDF**: User will provide; link for “download report” for Gemini project.

---

## Status
- Refinement round 2 complete; Revised Prompt v3 saved
- Projects 2 & 3 suggested: Full Stack (CS-465), Secure Coding (CS-405) [or Capstone CS-499]
- Ready for implementation
