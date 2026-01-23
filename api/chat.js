import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "No message received" });
    }

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content:
                "You are AI Assistant of Ten Solutions. Answer clearly for CBSE Classes 9–12 using NCERT syllabus.",
            },
            { role: "user", content: message },
          ],
        }),
      }
    );

    const data = await groqRes.json();

    if (!data.choices) {
      return res.status(500).json({
        reply: "AI failed. Check API key or quota.",
      });
    }

    return res.status(200).json({
      reply: data.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      reply: "Server error. AI not responding.",
    });
  }
}
