import { OpenAI } from 'openai'; 


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
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
    return "Ai is Integrated but this is Unpaid and You exceeded your current quota, please check your plan and billing details. For more information on this error";
  }
};

export { generateSummary };
