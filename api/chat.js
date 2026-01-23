aiForm.onsubmit = async (e) => {
  e.preventDefault();

  const question = aiInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  aiInput.value = "";

  const thinking = document.createElement("div");
  thinking.className = "message ai-msg";
  thinking.textContent = "AI Assistant of Ten Solutions is thinking...";
  chatHistory.appendChild(thinking);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: question })
    });

    if (!res.ok) {
      throw new Error("API error " + res.status);
    }

    const data = await res.json();
    thinking.remove();
    addMessage(data.reply || "No response from AI.", "ai");

  } catch (err) {
    thinking.remove();
    addMessage("⚠️ AI failed. Check console.", "ai");
    console.error(err);
  }
};
