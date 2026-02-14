const SKILL_GROUPS = [
  {
    title: "Coding",
    items: [
      "JavaScript (Node.js, React, Angular)",
      "C++",
      "Python",
      "SQL / NoSQL",
      "UML",
      "Secure coding practices",
    ],
  },
  {
    title: "Web & APIs",
    items: [
      "HTML, CSS, JavaScript",
      "RESTful APIs",
      "Frontend: Angular, React",
      "Backend: Express.js, Spring Boot",
    ],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git, GitHub",
      "CI/CD concepts",
      "Agile, Scrum, JIRA, Trello",
      "AWS, Azure",
      "MongoDB, MySQL",
      "VS Code, Eclipse",
    ],
  },
  {
    title: "Security",
    items: ["Secure coding & vulnerability awareness (see project)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills & Technologies</h2>
        <p className="mt-2 text-navy-400">
          Technologies and practices I use to build and deliver software.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-navy-700/60 bg-navy-900/50 p-5 transition hover:border-navy-600/60"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-navy-400">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
