<script setup lang="ts">
import { addNewCourse } from '~/services/firebase.service'

/* ==================== refs START==================== */
const courseTitle = ref('Accio SAT')
const courseDescription = ref('The best course out there')
const students = ref('0ZshM8rTqSbyngZajfMkXJNexbH3, sOL6EzCTzNODXtB78rLRjgo93992')
const lessons = ref('asdadszxc, asdadszxc')
/* ==================== refs END==================== */

/* ==================== hooks START==================== */

onMounted(() => {
  console.log('object')
})
/* ==================== hooks END==================== */

/* ==================== methods START==================== */
function submitNewLesson() {
  console.log('object')
  console.log(makeArrFromString(lessons.value))
  addNewCourse(courseTitle.value, courseDescription.value, makeArrFromString(students.value), makeArrFromString(lessons.value))
}

function makeArrFromString(input: string) {
  const returnArr = []
  let word = ''
  input.replace(/\s/g, '')
  for (let i = 0; i < input.length; i++) {
    const element = input[i]
    if (element === ',' || i === input.length - 1) {
      returnArr.push(word)
      word = ''
      i++
    }
    else { word += element }
  }
  return returnArr
}
/* ==================== methods END==================== */
</script>

<template>
  <!-- This is an example component -->
  <div class="max-w-2xl mx-auto bg-white p-16">
    <p>whrite with comma</p>
    <form @submit.prevent="submitNewLesson">
      <div class="grid gap-6 mb-6 ">
        <div>
          <label for="course-title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course title</label>
          <input id="course-title" v-model="courseTitle" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Accio SAT" required>
        </div>
        <div>
          <label for="course-description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course description</label>
          <input id="course-description" v-model="courseDescription" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="The best course out there" required>
        </div>
        <div>
          <label for="Students" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Students</label>
          <input id="Students" v-model="students" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="uids of students" required>
        </div>
        <div>
          <label for="lessons" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lessons</label>
          <input id="lessons" v-model="lessons" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ids of lessons of this course" required>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
