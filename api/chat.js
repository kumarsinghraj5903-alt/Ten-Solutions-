// chat.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serve your HTML file from "public" folder

// Simple AI mock endpoint
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.json({ reply: "⚠ Please ask a valid question." });
  }

  // Mock AI response (you can replace this with real OpenAI API later)
  const aiReply = `AI says: You asked "${message}" - This is a mock response.`;

  res.json({ reply: aiReply });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
