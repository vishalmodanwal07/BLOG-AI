import { OpenAI } from 'openai'; 


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have the API key in your environment variables
});

/**
 * 
 * @param {string} content 
 * @returns {string}
 */
const generateSummary = async (content) => {
  try {
    if (!content || content.trim().length === 0) {
      throw new Error("Content cannot be empty.");
    }

    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [{ role: "user", content: `Please summarize the following text:\n\n${content}` }],
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Failed to generate summary. Please try again later.";
  }
};

export { generateSummary };
