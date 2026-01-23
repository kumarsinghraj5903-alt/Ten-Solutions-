async function fetchRealAI(question) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: question })
  });

  const data = await res.json();
  return data.reply;
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  try {
    const { message } = req.body;

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
          messages: [
            {
              role: "system",
              content:
                "You are AI Assistant of Ten Solutions, CBSE Class 9 to 12 tutor for Physics, Chemistry and Mathematics. Explain step by step with formulas."
            },
            { role: "user", content: message }
          ]
        })
      }
    );

    const data = await response.json();
    res.status(200).json({
      reply: data.choices[0].message.content
    });

  } catch (e) {
    res.status(500).json({ error: "AI failed" });
  }
}
