import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateSummary = async (content) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Provide a concise summary for the following blog content:\n\n${content}`,
      max_tokens: 50,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating summary:", error.message);
    return "Summary generation failed.";
  }
};
