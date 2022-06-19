<script setup lang="ts">
import type { PlatformLesson } from '~/models/home.model'
import { useGlobalStore } from '~/stores/global'
import { getCourseLessons } from '~/services/firebase.service'

/* ==================== refs START==================== */
const lessonIDs = ref<string[]>([])
const lessons = ref()
/* ==================== refs END==================== */

const route = useRoute()
console.log(route.params.courseID)
const globalStore = useGlobalStore()
function getLessons() {
  for (let i = 0; i < globalStore.myCourses.length; i++) {
    const element = globalStore.myCourses[i]
    if (element.courseID === route.params.courseID)
      lessonIDs.value = element.lessonIDs
  }
}
getLessons()
getCourseLessons(lessonIDs.value).then((value) => {
  console.log(value)
  lessons.value = value
})
</script>

<template>
  <pre>{{ lessons }}</pre>
  <h1>this is [courseID]</h1>
  <router-link to="lesson/1">
    link to lesson 1
  </router-link>
  <br>
  <router-link to="Lesson">
    link to name
  </router-link>
  <br>
  <button @click="getLessons">
    get my lessons
  </button>
</template>
