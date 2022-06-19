<script setup lang="ts">
import type { YoutubeVideo } from '../models/home.model'
import { useLessonStore } from '~/stores/lesson'
const lessonStore = useLessonStore()

/* ==================== refs START==================== */
const lessonLink = ref('')
const lessonTitle = ref('')
const lessonDate = ref('')
const lessonDescription = ref('')
const lessonID = ref('')
/* ==================== refs END==================== */

/* ==================== methods START==================== */
function youtube_parser(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[7].length === 11) ? match[7] : false
}
function pushNewLesson() {
  const temp = youtube_parser(lessonLink.value)
  if (temp)
    lessonLink.value = temp
  const lesson: YoutubeVideo = { videoID: lessonLink.value, title: lessonTitle.value, description: lessonDescription.value, videoDate: lessonDate.value, likes: 0 }
  lessonStore.createNewLesson(lesson, lessonID.value)
}

/* ==================== methods END==================== */
</script>

<template>
  <!-- This is an example component -->
  <div class="max-w-2xl mx-auto bg-white p-16">
    <form @submit.prevent="pushNewLesson">
      <div class="grid gap-6 mb-6 ">
        <div>
          <label for="lesson-link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Youtube link to lesson</label>
          <input id="lesson-link" v-model="lessonLink" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://www.youtube.com/watch?v=YEPn6orRpvc" required>
        </div>
        <div>
          <label for="lesson-title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lesson title</label>
          <input id="lesson-title" v-model="lessonTitle" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Accio SAT Math heart of algebra" required>
        </div>
        <div>
          <label for="lesson-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lesson-date</label>
          <input id="lesson-date" v-model="lessonDate" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="22.06.22" required>
        </div>
        <div>
          <label for="lesson-description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lesson-description</label>
          <input id="lesson-description" v-model="lessonDescription" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="put the description of lesson here" required>
        </div>
        <div>
          <label for="lesson-ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">lesson-ID</label>
          <input id="lesson-ID" v-model="lessonID" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="put the description of lesson here" required>
        </div>
        <!-- <div>
          <label for="id-of-course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">id-of-course</label>
          <input id="id-of-course" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="put the description of lesson here">
        </div> -->
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
