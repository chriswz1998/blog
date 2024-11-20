import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { transaction } = req.body

    if (!transaction) {
      return res.status(400).json({ error: 'Missing transaction data' })
    }

    const message = `
    💰 新交易检测到！
    - 发送方: ${transaction.from}
    - 接收方: ${transaction.to}
    - 金额: ${transaction.amount}
    - 交易哈希: ${transaction.hash}
    - 时间: ${transaction.timestamp}
    `

    try {
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
      await axios.post(url, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      })
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ error: 'Failed to send Telegram notification' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
