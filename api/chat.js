aiForm.onsubmit = async e => {
  e.preventDefault();

  const question = aiInput.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  aiInput.value = '';

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `CBSE Class 9–12 student question:\n${question}`
      })
    });

    const data = await res.json();
    addMessage(data.reply || "AI could not generate answer.", 'ai');

  } catch (err) {
    addMessage("⚠️ AI connection failed. Please try again.", 'ai');
  }
};
