import Image from "next/image";

const PROFILE_IMAGE = "/profile picture.JPG";

export default function Hero() {
  return (
    <section id="about" className="border-b border-navy-800/50 bg-navy-900/30 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-navy-600 ring-2 ring-navy-500/50 sm:h-40 sm:w-40">
            <Image
              src={PROFILE_IMAGE}
              alt="Cyrille Yelibi"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, 160px"
              priority
            />
          </div>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Cyrille Yelibi
        </h1>
        <p className="mt-3 text-lg font-medium text-navy-300 sm:text-xl">
          Junior Software Engineer
        </p>
        <p className="mt-6 text-base leading-relaxed text-navy-400 sm:text-lg">
          Dedicated engineer with hands-on experience in full-stack development. I focus on
          scalable problem-solving, clean code, and continuous learning. Familiar with
          CI/CD, Agile, and modern web technologies—eager to grow and contribute to
          dynamic teams.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-navy-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-navy-600 bg-transparent px-5 py-2.5 text-sm font-medium text-navy-300 transition hover:border-navy-500 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
