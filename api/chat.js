import { Configuration, OpenAIApi } from 'openai'
import { Redis } from '@upstash/redis'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

const DEFAULT_MESSAGE = 'No entiendo lo que quieres decir.'

export default async function handler (req, res) {
  const { prompt } = req.query

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Actúa como un actor simulando un asistente perezoso y borde que no explica bien.' },
      { role: 'user', content: prompt }
    ]
  })

  const content = response?.data?.choices?.[0]?.message?.content.trim() || DEFAULT_MESSAGE

  try {
    await redis.lpush('questions', {
      id: randomId(),
      question: prompt,
      answer: content
    })
  } catch (error) {
    // Do nothing
  }

  res.status(200).json({
    content
  })
}

const randomId = function (length = 6) {
  return Math.random().toString(36).substring(2, length + 2)
}
