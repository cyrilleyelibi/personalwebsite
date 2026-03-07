import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    const message =
      process.env.NODE_ENV === "development" && err instanceof Error
        ? err.message
        : "Something went wrong. Please try again.";
    return NextResponse.json(
      { error: "server_error", text: message },
      { status: 500 }
    );
  }
}
