<script setup lang="ts">
import type { PlatformCourse } from '~/models/home.model'
import { useGlobalStore } from '~/stores/global'

/* ==================== stores START==================== */

const globalStore = useGlobalStore()
globalStore.storeMyCourses()
/* ==================== stores END==================== */

/* ==================== refs START==================== */
const courses = ref<PlatformCourse[]>(globalStore.myCourses)
/* ==================== refs END==================== */
</script>

<template>
  <!-- <pre>{{ courses }}</pre> -->
  <h1>this is course choise</h1>
  <ul>
    <li v-for="course in courses" :key="course.courseID">
      <router-link :to="/course/ + course.courseID">
        {{ course.courseTitle }}
      </router-link>
    </li>
  </ul>
</template>
