import OpenAI from "openai";

const client = new OpenAI();

export async function fetchChatGPTResponse(prompt) {
    const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    return completion.choices[0].message.content;
}