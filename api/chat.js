// server.js - Backend proxy for xAI Grok API
// Run with: node server.js  or deploy to Vercel/Netlify/Render

const express = require('express');
const fetch = require('node-fetch'); // or use built-in fetch in Node 18+
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// NEVER commit this file with real key — use environment variable!
const XAI_API_KEY = process.env.XAI_API_KEY;

if (!XAI_API_KEY) {
  console.error('Error: XAI_API_KEY environment variable is not set.');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

app.post('/api/grok-chat', async (req, res) => {
  try {
    const { messages, model = 'grok-beta', temperature = 0.7, max_tokens = 1500 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens,
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('xAI API error:', response.status, errorText);
      return res.status(response.status).json({ error: errorText || 'API request failed' });
    }

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Grok proxy server running on port ${PORT}`);
});
