aiForm.onsubmit = async e => {
  e.preventDefault();

  const question = aiInput.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  aiInput.value = '';

  // show thinking
  const thinkingMsg = document.createElement('div');
  thinkingMsg.className = 'message ai-msg';
  thinkingMsg.innerHTML = 'AI Assistant of Ten Solutions is thinking...';
  chatHistory.appendChild(thinkingMsg);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `CBSE Class 9–12 student question:\n${question}`
      })
    });

    const data = await res.json();
    thinkingMsg.remove();
    addMessage(data.reply || "No response from AI.", 'ai');

  } catch (err) {
    thinkingMsg.remove();
    addMessage("AI failed to respond. Please refresh and try again.", 'ai');
    console.error(err);
  }
};
