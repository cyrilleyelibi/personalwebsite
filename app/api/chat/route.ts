import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

function toFriendlyErrorMessage(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err);
  if (/503|Service Unavailable/i.test(raw)) {
    return "The AI service is temporarily unavailable. Please try again in a moment.";
  }
  if (/429|rate limit|quota/i.test(raw)) {
    return "Too many requests. Please wait a moment and try again.";
  }
  if (/401|403|invalid|unauthorized|forbidden/i.test(raw)) {
    return "There was a problem with the AI service. Please try again later.";
  }
  if (/fetch|network|ECONNREFUSED|ETIMEDOUT/i.test(raw)) {
    return "Could not reach the AI service. Check your connection and try again.";
  }
  return "Something went wrong. Please try again.";
}

export async function POST(req: NextRequest) {
  try {
    const { message } = (await req.json()) as { message?: string };
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "invalid_request", text: "Please send a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        error: "not_configured",
        text: "Gemini API key is not configured. Add GEMINI_API_KEY to your environment (see README).",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const result = await model.generateContent(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text: text || "No response." });
  } catch (err) {
    const message = toFriendlyErrorMessage(err);
    return NextResponse.json(
      { error: "server_error", text: message },
      { status: 500 }
    );
  }
}
