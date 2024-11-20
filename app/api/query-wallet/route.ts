import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const SOLANA_API_URL =
  'https://solana-api.instantnodes.io/token-7dCvckAHFhqgCAfe67y2NDtedflb1BQ9'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // 仅允许 POST 请求
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { walletAddress } = req.body

  if (!walletAddress || typeof walletAddress !== 'string') {
    return res
      .status(400)
      .json({ error: 'Missing or invalid walletAddress parameter' })
  }

  try {
    const payload = {
      jsonrpc: '2.0',
      id: 1,
      method: 'getTransactionCount'
    }

    const response = await axios.post(SOLANA_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const transactions = [
      {
        hash: `TX-${Date.now()}`,
        amount: Math.random() * 100,
        from: 'RandomSender',
        to: walletAddress,
        timestamp: new Date().toISOString()
      }
    ]

    res.status(200).json({ transactions })
  } catch (error) {
    console.error('Error querying Solana API:', error)
    res.status(500).json({ error: 'Failed to fetch wallet data' })
  }
}
