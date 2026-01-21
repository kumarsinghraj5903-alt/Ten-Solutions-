import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const { message, context, memory } = req.body;

    const messages = [
      {
        role: "system",
        content: `You are a CBSE NCERT teacher.
Context: ${context}`
      },
      ...(memory || []),
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages
    });

    res.status(200).json({
      reply: completion.choices[0].message.content
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Server error" });
 ("/api/chat",  }
}
