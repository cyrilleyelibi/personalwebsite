const PROJECTS = [
  {
    id: "gemini",
    title: "Semantic Analysis with Gemini LLM",
    subtitle: "SpinCityLab · LLM study",
    description:
      "Data science research using Google's Gemini LLM and Text Embedding APIs: generated a dataset of African cuisine recipes, built high-dimensional embeddings, and applied KNN and Louvain clustering to identify semantic similarities. This site's chatbot uses the same text-generation approach from the study.",
    tech: ["Gemini API", "Python", "Text embeddings", "Graph analysis"],
    githubUrl: "#", // Replace with your study repo URL
    reportPdfUrl: "/documents/LLM Food data & Graph Analysis.pdf",
    reportLabel: "Download study report (PDF)",
    embedChatbot: true,
  },
  {
    id: "travlr",
    title: "Travlr",
    subtitle: "Full Stack · CS-465",
    description:
      "MEAN stack application (MongoDB, Express, Angular, Node). Designed and developed with focus on problem-solving, best practices, and version control with GitHub.",
    tech: ["MongoDB", "Express", "Angular", "Node.js"],
    githubUrl: "#", // Replace with your Travlr repo URL
    demoUrl: null as string | null,
    screenshotPlaceholder: true,
  },
  {
    id: "secure-coding",
    title: "Secure Coding Practices & Vulnerability Analysis",
    subtitle: "CS-405",
    description:
      "Survey of secure coding policies and technical case studies of common vulnerabilities (OWASP-style). Documented mitigation patterns and recommendations for writing secure, robust code.",
    tech: ["Secure coding", "OWASP", "Vulnerability analysis"],
    reportPdfUrl: "/documents/secure-coding-report.pdf",
    reportLabel: "Download report (PDF)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-navy-800/50 bg-navy-900/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Projects</h2>
        <p className="mt-2 text-navy-400">Selected work and research.</p>
        <div className="mt-10 space-y-12">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-navy-700/60 bg-navy-900/50 p-6 sm:p-8 transition hover:border-navy-600/60"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm text-navy-400">{project.subtitle}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-navy-700/80 px-3 py-1 text-xs text-navy-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-navy-400 leading-relaxed">{project.description}</p>

              {project.id === "gemini" && (
                <div className="mt-4 rounded-lg border border-navy-600/50 bg-navy-800/30 p-4">
                  <p className="text-sm text-navy-300">
                    The chatbot in the bottom-right corner is powered by the same text-generation
                    approach from this study. Configure your Gemini API key to try it.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-navy-300 underline hover:text-white"
                      >
                        View study on GitHub
                      </a>
                    )}
                    <a
                      href={project.reportPdfUrl}
                      download
                      className="text-sm font-medium text-navy-300 underline hover:text-white"
                    >
                      {project.reportLabel}
                    </a>
                  </div>
                </div>
              )}

              {project.id === "travlr" && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-navy-600 px-4 py-2 text-sm font-medium text-white hover:bg-navy-500"
                    >
                      View code on GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-navy-600 px-4 py-2 text-sm font-medium text-navy-300 hover:border-navy-500 hover:text-white"
                    >
                      View live demo
                    </a>
                  )}
                  {project.screenshotPlaceholder && (
                    <div className="mt-4 flex gap-2 overflow-x-auto rounded-lg border border-navy-700 bg-navy-800/50 p-4">
                      <div className="h-32 min-w-[200px] rounded bg-navy-700/80 flex items-center justify-center text-navy-500 text-sm">
                        Screenshot 1
                      </div>
                      <div className="h-32 min-w-[200px] rounded bg-navy-700/80 flex items-center justify-center text-navy-500 text-sm">
                        Screenshot 2
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.id === "secure-coding" && "reportPdfUrl" in project && (
                <div className="mt-4">
                  <a
                    href={project.reportPdfUrl}
                    download
                    className="inline-flex items-center rounded bg-navy-600 px-4 py-2 text-sm font-medium text-white hover:bg-navy-500"
                  >
                    {project.reportLabel}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
