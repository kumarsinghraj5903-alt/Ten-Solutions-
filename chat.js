import OpenAI from "openai";

/**
 * Initialize OpenAI client
 * Uses OPENAI_API_KEY from Vercel Environment Variables
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Vercel Serverless Function
 */
export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, context, memory } = req.body;

    // Basic validation
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Build chat messages
    const messages = [
      {
        role: "system",
        content: `You are an expert CBSE NCERT teacher for Classes 9–12.
Explain answers clearly, step-by-step, exam-oriented.
Context: ${context || "CBSE Student"}`
      },
      ...(Array.isArray(memory) ? memory : []),
      {
        role: "user",
        content: message
      }
    ];

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.4,
      max_tokens: 600
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    // Send response
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("AI API Error:", error);

    return res.status(500).json({
      error: "AI server error",
      details: error.message
    });
  }
}
