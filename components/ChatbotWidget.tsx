"use client";

import { useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const reply =
        data.error === "not_configured" || data.error === "server_error"
          ? data.text
          : data.text || "No response.";
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Could not reach the server. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 z-50 flex flex-col overflow-hidden rounded-xl border border-navy-600 bg-navy-900 shadow-xl transition-all duration-300 ${
          open ? "h-[420px] w-[340px] sm:w-[380px]" : "h-0 w-0 border-0 opacity-0 sm:h-14 sm:w-14 sm:opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center justify-between border-b border-navy-700 bg-navy-800 px-4 py-3 text-left text-sm font-medium text-white"
          aria-label={open ? "Close chatbot" : "Open chatbot"}
        >
          <span>Chat (Gemini)</span>
          <span className="text-navy-400">{open ? "−" : "+"}</span>
        </button>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.length === 0 && !loading && (
            <p className="text-sm text-navy-500">
              Ask me anything. Add GEMINI_API_KEY to your env to enable responses.
            </p>
          )}
          {loading && (
            <p className="text-sm text-navy-500">Thinking...</p>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`rounded-lg px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "ml-6 bg-navy-600 text-white"
                  : "mr-6 bg-navy-800 text-navy-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="border-t border-navy-700 p-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-navy-600 bg-navy-800 px-3 py-2 text-sm text-white placeholder-navy-500 focus:border-navy-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-navy-500 px-3 py-2 text-sm font-medium text-white hover:bg-navy-400 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy-500 text-white shadow-lg hover:bg-navy-400 sm:hidden"
          aria-label="Open chatbot"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </>
  );
}
