export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    // Get the user's question from the request body
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No question provided." });
    }

    // System prompt for AI assistant
    const systemPrompt = `
You are the AI Assistant of Ten Solutions.
Answer questions clearly and step-by-step.
Explain concepts, formulas, derivations, numericals, and examples.
Use simple, easy-to-understand language for students.
Provide structured, helpful, and informative answers.
Do not ask for class, subject, or chapter.
`;

    // Call the Groq AI API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.3,
        max_tokens: 900,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    // Return the AI's reply
    res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "AI could not generate a reply."
    });

  } catch (err) {
    console.error("AI API Error:", err);
    res.status(500).json({ error: "AI error" });
  }
}
