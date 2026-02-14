"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-navy-800/50 bg-navy-900/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact</h2>
        <p className="mt-2 text-navy-400">Get in touch—I’d be glad to connect.</p>

        <p className="mt-4 rounded-lg border border-navy-600/50 bg-navy-800/30 px-4 py-3 text-sm text-navy-300">
          Backend/email integration will be added later. For now this form is front-end only.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-lg border border-navy-600/50 bg-navy-800/30 p-6 text-center text-navy-300">
            Thanks! Form received (demo). Email integration coming soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-navy-600 bg-navy-800/50 px-4 py-2.5 text-white placeholder-navy-500 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-navy-600 bg-navy-800/50 px-4 py-2.5 text-white placeholder-navy-500 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-navy-600 bg-navy-800/50 px-4 py-2.5 text-white placeholder-navy-500 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-navy-500 py-2.5 text-sm font-medium text-white transition hover:bg-navy-400"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
