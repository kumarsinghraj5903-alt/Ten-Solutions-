import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure your API key is set
});

async function getCBSEAnswer(context, message) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content: `
You are an experienced CBSE NCERT teacher for Classes 9 to 12.

RULES:
- Always give exam-oriented answers
- Use simple student-friendly language
- Structure answers clearly:
  1. Definition
  2. Explanation
  3. Formula (if any)
  4. Example
  5. Key points
- Assume student is preparing for board exams
- Do NOT use emojis
- Keep answers clear and accurate
Context: ${context}
          `
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    // The model's answer is usually in the first choice
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error generating answer:", error);
    return "Sorry, there was an error generating the answer.";
  }
}

// Example usage:
const context = "Class 10 Physics: Laws of Motion";
const message = "Explain Newton's Second Law with an example.";

getCBSEAnswer(context, message).then(answer => {
  console.log(answer);
});
