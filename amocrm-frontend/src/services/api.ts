import axios from 'axios'

export const fetchLeads = async (query: string) => {
  const response = await axios.get('http://localhost:3000/api/leads', { params: { query } })
  return response.data._embedded.leads
}

export const fetchStatuses = async () => {
  const response = await axios.get('http://localhost:3000/api/pipelines')
  return response.data._embedded.pipelines
}

export const fetchUserInfo = async (user_id: number) => {
  const response = await axios.get(`http://localhost:3000/api/users/${user_id}`)
  return response.data
}
