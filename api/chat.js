export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          temperature: 0.3,
          max_tokens: 1000,
          messages: [
            {
              role: "system",
              content: `
You are **AI Assistant of Ten Solutions**.

You are a PROFESSIONAL CBSE/NCERT teacher.

Rules you MUST follow:
- Teach ONLY Class 9, 10, 11, 12
- Subjects: Physics, Chemistry, Mathematics
- Always give STEP-BY-STEP answers
- Write important FORMULAS clearly
- Use NCERT terminology
- Board-exam focused format
- If numerical → full working
- If derivation/proof → exam-style steps
- Simple language for students
- No emojis, no casual chat
- End with a short exam tip or summary
              `
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: "No AI response" });
    }

    res.status(200).json({
      reply: data.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({
      error: "AI failed",
      details: error.message
    });
  }
}
