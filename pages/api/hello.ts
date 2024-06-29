import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

const redis = new Redis({
  url: 'https://ideal-toucan-49306.upstash.io',
  token: 'AcCaAAIncDE2MTMwYWE4ODRmZTY0ZjNkODNiOTg3MjUzMzdhYWE1OXAxNDkzMDY',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<true> {
  let count = await redis.incr("counter")
  res.status(200).json({count: count})
}
