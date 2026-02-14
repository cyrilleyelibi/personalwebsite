const RESUME_PDF = "/documents/Updated Cyelibi_resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Resume</h2>
        <p className="mt-2 text-navy-400">Overview of my experience and skills.</p>
        <div className="mt-8 rounded-xl border border-navy-700/60 bg-navy-900/50 p-6">
          {/* Thumbnail: first page preview or placeholder */}
          <div className="aspect-[8.5/11] max-w-xs mx-auto rounded-lg border border-navy-700 bg-navy-800/80 overflow-hidden">
            <object
              data={RESUME_PDF}
              type="application/pdf"
              className="h-full w-full"
              aria-label="Resume preview"
            >
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-2 text-navy-500">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm">Resume preview</span>
              </div>
            </object>
          </div>
          <div className="mt-6 text-center">
            <a
              href={RESUME_PDF}
              download="Cyrille_Yelibi_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-400"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
