'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

type Transaction = {
  hash: string
  amount: number
  from: string
  to: string
  timestamp: string
}

export const GMGNClient = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [monitoring, setMonitoring] = useState(false)
  const [walletAddress, setWalletAddress] = useState(
    'H9x1tBLYwAVzFq9ib8scfFzM679tyD1cHsTxww43eXTH'
  ) // 默认钱包地址
  const [newWalletAddress, setNewWalletAddress] = useState('')
  const itemsPerPage = 5 // 每页显示的交易数量
  const [currentPage, setCurrentPage] = useState(1)

  // 定时器轮询逻辑
  useEffect(() => {
    let interval: NodeJS.Timeout

    const fetchTransactions = async () => {
      try {
        const response = await axios.post('/api/query-wallet', {
          walletAddress
        })
        const fetchedTransactions: Transaction[] = response.data.transactions

        setTransactions((prev) => {
          // 合并新的交易记录，避免重复
          const newTransactions = fetchedTransactions.filter(
            (tx) => !prev.find((p) => p.hash === tx.hash)
          )
          return [...newTransactions, ...prev]
        })
      } catch (error) {
        console.error('Failed to fetch wallet transactions:', error)
      }
    }

    if (monitoring) {
      fetchTransactions() // 初始加载
      interval = setInterval(fetchTransactions, 10000) // 每 10 秒查询一次
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [monitoring, walletAddress])

  const handleStartMonitoring = () => setMonitoring(true)
  const handleStopMonitoring = () => setMonitoring(false)

  const handleUpdateWalletAddress = () => {
    if (newWalletAddress.trim()) {
      setWalletAddress(newWalletAddress.trim())
      setNewWalletAddress('')
      alert(`钱包地址已更新为：${newWalletAddress.trim()}`)
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedTransactions = transactions.slice(startIndex, endIndex)

  const handleNextPage = () => setCurrentPage((prev) => prev + 1)
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">钱包交易监控</h1>

        <div className="mb-6">
          <p className="text-gray-700 mb-2">
            当前监控的钱包地址：
            <span className="font-mono text-blue-600">{walletAddress}</span>
          </p>
          <div className="flex items-center">
            <input
              type="text"
              value={newWalletAddress}
              onChange={(e) => setNewWalletAddress(e.target.value)}
              placeholder="输入新的钱包地址"
              className="flex-grow px-4 py-2 border rounded-l"
            />
            <button
              onClick={handleUpdateWalletAddress}
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              更新地址
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">
            当前状态: {monitoring ? '监控中...' : '未监控'}
          </p>
          <button
            onClick={handleStartMonitoring}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            disabled={monitoring}
          >
            开始监控
          </button>
          <button
            onClick={handleStopMonitoring}
            className="bg-red-500 text-white px-4 py-2 rounded"
            disabled={!monitoring}
          >
            停止监控
          </button>
        </div>

        <h2 className="text-xl font-bold mb-2">交易记录</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-700">暂无交易数据。</p>
        ) : (
          <div className="bg-white rounded shadow overflow-hidden">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">交易哈希</th>
                  <th className="px-4 py-2">金额</th>
                  <th className="px-4 py-2">发送方</th>
                  <th className="px-4 py-2">接收方</th>
                  <th className="px-4 py-2">时间</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((tx) => (
                  <tr key={tx.hash} className="border-t">
                    <td className="px-4 py-2">{tx.hash}</td>
                    <td className="px-4 py-2">{tx.amount}</td>
                    <td className="px-4 py-2">{tx.from}</td>
                    <td className="px-4 py-2">{tx.to}</td>
                    <td className="px-4 py-2">{tx.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 分页按钮 */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            上一页
          </button>
          <button
            onClick={handleNextPage}
            disabled={endIndex >= transactions.length}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  )
}
