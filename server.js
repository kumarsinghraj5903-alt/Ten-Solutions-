import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, context, memory } = req.body;

    const messages = [
      {
        role: 'system',
        content:
          `You are a CBSE NCERT teacher for classes 9–12.
Explain clearly, step by step.
Context: ${context}`
      },
      ...(memory || []),
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.3
    });

    res.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({
      reply: 'AI server error. Please try again later.'
    });
  }
fetch("https://your-project.vercel.app/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(...)

});

export default app;
const firebaseConfig = {
  apiKey: "AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "ten-solutions-2026.firebaseapp.com",
  projectId: "ten-solutions-2026",
  storageBucket: "ten-solutions-2026.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};
