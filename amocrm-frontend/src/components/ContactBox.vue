<template>
  <section class="contact-box" v-if="contact">
    <a-avatar :src="contact.avatar" />
    <p>{{ contact.name }}</p>
    <a v-if="contact.phone" :href="`tel:${contact.phone}`">
      <phone-outlined />
    </a>
    <a v-if="contact.email" :href="`mailto:${contact.email}`">
      <mail-outlined />
    </a>
  </section>
  <p v-else>Без контакта</p>
</template>

<script setup lang="ts">
import { PhoneOutlined, MailOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  contact?: {
    avatar?: string
    name?: string
    phone?: string
    email?: string
  }
}>()
</script>

<style scoped>
.contact-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
}

.contact-box p {
  margin: 0;
}

.contact-box a {
  display: flex;
  align-items: center;
  margin: 0;
}
</style>
