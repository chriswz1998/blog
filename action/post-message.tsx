import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_REQUEST_URL}/blog-messages`

export const postMessage = async (data: any): Promise<any> => {
  const response = await axios.post(`${URL}`, data)
  return response.data
}

export const getMessage = async (id: string): Promise<any> => {
  const response = await axios.get(`${URL}/${id}`)
  return response.data
}
