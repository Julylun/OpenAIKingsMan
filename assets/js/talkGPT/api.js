import * as Component from './component.js'
export {
    getGeminiReply,
    receiveMessage
}

const getGeminiReply = async (message) => {
    const geminiApiKey = "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";
    const geminiApiUrl = "https://api.groq.com/openai/v1/chat/completions";
    console.log("mess: " + message);
    const geminiRequestBody = {
        messages: [
            {
                role: "user",
                content:  message,
            },
        ],
        model: "mixtral-8x7b-32768",
    };

    try {
        const response = await fetch(geminiApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${geminiApiKey}`,
            },
            body: JSON.stringify(geminiRequestBody),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return null; // or handle the error appropriately
    }
};


const receiveMessage = async (message) => {
    Component.addMessage('User',message+"");
    const reply = await getGeminiReply(message+" ");
    Component.addMessage('talkgpt',reply);
    
    return reply;
};