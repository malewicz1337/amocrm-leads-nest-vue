<template>
  <article class="container">
    <header class="header">
      <h2>Leads</h2>
      <a-input-search
        v-model:value="query"
        placeholder="Search Leads"
        style="width: 200px"
        @search="getLeads"
      />
    </header>
    <a-table :columns="columns" :dataSource="leads" :loading="loading" rowKey="id" bordered>
      <template #expandedRowRender="{ record }">
        <ContactBox :contact="users[record.responsible_user_id]" />
      </template>
    </a-table>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ContactBox from './ContactBox.vue'
import { useLeads } from '../composables/useLeads'

const query = ref<string>('')

const { leads, loading, statuses, users, getLeads, getStatuses } = useLeads()

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Бюджет',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Статус',
    dataIndex: 'status_id',
    customRender: ({ text }: { text: number }) => statuses.value[text] || 'Unknown'
  },
  {
    title: 'Ответственный',
    dataIndex: 'responsible_user_id',
    customRender: ({ text }: { text: number }) => users.value[text]?.name || 'Unknown'
  },
  {
    title: 'Дата создания',
    dataIndex: 'created_at',
    key: 'created_at',
    customRender: ({ text }: { text: number }) => new Date(text * 1000).toLocaleString()
  }
]

const fetchData = async () => {
  await getLeads(query.value)
  await getStatuses()
}

onMounted(fetchData)
</script>

<style scoped>
.container {
  padding: 1rem;
  height: 100%;
  width: 100%;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
}
</style>
