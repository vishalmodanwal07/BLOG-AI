import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateSummary = async(content)=>{
    try {
        if (!content || content.trim().length === 0) {
            throw new Error("Content cannot be empty.");
          }
          const prompt = `Please summarize the following content very short and crispy in 25 words only:\n\n${content}`
          const result = await model.generateContent(prompt);
          console.log(result.response.text());
          return result.response.text();

    } catch (error) {
        console.log("error while generating summary" , error);
        
    }
}

export {generateSummary};


