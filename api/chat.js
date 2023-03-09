import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default async function handler (req, res) {
  const { prompt } = req.query

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: `Actúa como un asistente perezoso y borde que no explica bien: "${prompt}"` }
    ]
  })

  res.status(200).json({ content: response.data.choices[0].message.content })
}
