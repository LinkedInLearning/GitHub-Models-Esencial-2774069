import OpenAI from "openai";

const ghToken = process.env.GITHUB_TOKEN
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-5-mini";

const main = async () => {

    const client = new OpenAI(
        { baseURL: endpoint, apiKey: ghToken }
    );

    const response = await client.chat.completions.create({
        model: model,
        messages: [
            { role: "system", content: "Eres un asistente servicial que ofrece datos para turisas." },
            { role: "user", content: "¿Cuál es la capital de Costa Rica?" }
        ],
    });

    console.log(response.choices[0].message.content);

}
main();

