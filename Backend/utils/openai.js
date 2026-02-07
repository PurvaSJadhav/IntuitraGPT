import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "HTTP-Referer": "http://localhost:3000", // Required by OpenRouter
            "X-Title": "IntuitraGPT" // Optional: Your app name
        },
        body: JSON.stringify({
            model: "openai/gpt-4o-mini", // OpenRouter model format
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", options);
        const data = await response.json();

        if (!response.ok) {
            console.error("OpenAI API Error:", data);
            throw new Error(`OpenAI API Error: ${data.error?.message || response.statusText}`);
        }

        if (!data.choices || !data.choices.length) {
            console.error("Unexpected OpenAI response structure:", data);
            throw new Error("Invalid response structure from OpenAI");
        }

        return data.choices[0].message.content; //reply
    } catch (err) {
        console.error("Error in getOpenAIAPIResponse:", err);
        throw err;
    }
}

export default getOpenAIAPIResponse;