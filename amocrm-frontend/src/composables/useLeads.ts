import { ref } from 'vue'
import { fetchLeads, fetchStatuses, fetchUserInfo } from '../services/api'

export const useLeads = () => {
  const leads = ref<any[]>([])
  const loading = ref<boolean>(true)
  const statuses = ref<{ [key: number]: string }>({})
  const users = ref<{ [key: number]: any }>({})

  const getLeads = async (query: string) => {
    loading.value = true
    try {
      leads.value = await fetchLeads(query)

      const userIds = new Set(leads.value.map((lead) => lead.responsible_user_id))
      const userRequests = Array.from(userIds).map(fetchUserInfo)
      const userDataArray = await Promise.all(userRequests)

      userDataArray.forEach((user) => {
        if (user) users.value[user.id] = user
      })
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      loading.value = false
    }
  }

  const getStatuses = async () => {
    try {
      const pipelines = await fetchStatuses()

      pipelines.forEach((pipeline: any) => {
        pipeline._embedded.statuses.forEach((status: any) => {
          statuses.value[status.id] = status.name
        })
      })
    } catch (error) {
      console.error('Error fetching statuses:', error)
    }
  }

  return { leads, loading, statuses, users, getLeads, getStatuses }
}
