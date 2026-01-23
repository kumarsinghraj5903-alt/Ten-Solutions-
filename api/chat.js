// /api/chat.js
import fetch from "node-fetch"; // optional, depending on Node version

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // you can use gpt-4o, gpt-4, or gpt-3.5-turbo
        messages: [
          {
            role: "system",
            content: "You are a CBSE Class 9-12 Physics, Chemistry & Maths AI tutor. Answer in a student-friendly, step-by-step way."
          },
          { role: "user", content: message }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0].message) {
      return res.status(500).json({ error: "AI did not return a valid response" });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("Chat API Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
