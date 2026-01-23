aiForm.onsubmit = async e => {
  e.preventDefault();

  const question = aiInput.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  aiInput.value = '';

  const thinking = document.createElement('div');
  thinking.className = 'message ai-msg';
  thinking.innerHTML = 'AI Assistant of Ten Solutions is thinking...';
  chatHistory.appendChild(thinking);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `CBSE Class 9–12 student question:\n${question}`
      })
    });

    const data = await res.json();
    thinking.remove();
    addMessage(data.reply, 'ai');

  } catch (err) {
    thinking.remove();
    addMessage("AI error. Please try again.", 'ai');
  }
};
