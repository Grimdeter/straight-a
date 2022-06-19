<script setup lang="ts">
// import { useUserStore } from '~/stores/user'

// const user = useUserStore()
// const name = $ref(user.savedName)

// const router = useRouter()
// const go = () => {
//   if (name)
//     router.push(`/hi/${encodeURIComponent(name)}`)
// }

// const { t } = useI18n()
</script>

<template>
  <div>
    <h1>hi from index</h1>
    <router-link to="/course/1">
      link
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
