// ──────────────── Elements ────────────────
const aiBtn = document.getElementById('aiBtn');
const aiModal = document.getElementById('aiModal');
const aiClose = document.getElementById('aiClose');
const chatHistory = document.getElementById('chatHistory');
const aiForm = document.getElementById('aiForm');
const aiInput = document.getElementById('aiInput');

// ──────────────── Modal Open/Close ────────────────
aiBtn.onclick = () => {
  aiModal.style.display = 'flex';
  aiInput.focus();
};

aiClose.onclick = () => {
  aiModal.style.display = 'none';
};

// Close modal on click outside
window.onclick = e => {
  if (e.target === aiModal) aiModal.style.display = 'none';
};

// Close modal on ESC key
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') aiModal.style.display = 'none';
});

// ──────────────── Add message to chat ────────────────
function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `message ${type}-msg`;
  msg.innerHTML = text;
  chatHistory.appendChild(msg);
  // Scroll to latest message
  setTimeout(() => {
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }, 50);
}

// ──────────────── AI Response Logic ────────────────
function getAIResponse(question) {
  const q = question.toLowerCase().trim();

  // Greeting
  if (q === '' || q.includes('hi') || q.includes('hello') || q.includes('hey')) {
    return "Hello! 👋 I'm your Class 9–12 CBSE AI Tutor. Ask me any topic: Physics, Chemistry, or Maths!";
  }

  // Help
  if (q.includes('help') || q.includes('what can you') || q.includes('who are you')) {
    return "I cover the entire CBSE syllabus for Class 9–12. Physics, Chemistry, Maths — chapters, formulas, numericals, reactions, derivations, proofs, board questions. Ask any problem!";
  }

  // Physics: Motion
  if (q.includes('motion') || q.includes('kinematics') || q.includes('equation of motion')) {
    return `<b>Motion (Class 9 & 11)</b><br>
• Distance vs Displacement<br>
• Speed vs Velocity<br>
• Acceleration a = (v – u)/t<br>
• Equations of motion (v = u+at, s = ut+½at², v² = u²+2as)<br>
• Graphs: Distance-time slope = speed, Velocity-time slope = acceleration<br>
Want a solved numerical or graph?`;
  }

  // Physics: Force
  if (q.includes('force') || q.includes("newton's law") || q.includes('friction')) {
    return `<b>Force & Laws of Motion (Class 9 & 11)</b><br>
• Newton's Laws: F=ma, action-reaction<br>
• Momentum p=mv, Impulse J=Δp<br>
• Friction: static ≤ μ_s N, kinetic = μ_k N<br>
• Pseudo force = -ma_frame<br>
• Applications: pulleys, inclined plane, Atwood machine<br>
Want a step-by-step numerical solved?`;
  }

  // Physics: Gravitation
  if (q.includes('gravitation') || q.includes('gravity') || q.includes('kepler')) {
    return `<b>Gravitation (Class 9 & 11)</b><br>
• F = G m₁m₂ / r², g ≈ 9.8 m/s²<br>
• Free fall, Mass vs Weight<br>
• Escape velocity v_esc = √(2GM/R)<br>
• Orbital velocity v_orb = √(GM/r)<br>
• Kepler's Laws: Elliptical orbits, Equal areas, T² ∝ r³<br>
Want a satellite/numerical explained?`;
  }

  // Fallback
  return `Got your question! 📚<br>
Please mention class, chapter, concept, formula, numerical, reaction, derivation, or board question for detailed help.`;
}

// ──────────────── Form Submit ────────────────
aiForm.onsubmit = e => {
  e.preventDefault();
  const question = aiInput.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  aiInput.value = '';

  setTimeout(() => {
    const answer = getAIResponse(question);
    addMessage(answer, 'ai');
    aiInput.focus();
  }, 1000 + Math.random() * 1500);
};
