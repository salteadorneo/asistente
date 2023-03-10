import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

export default async function handler (req, res) {
  const { page, size } = req.query

  const start = (page - 1) * size
  const end = page * size - 1

  const data = await redis.lrange('questions', start, end)

  res.status(200).json(data)
}
