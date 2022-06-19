import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import type { PlatformCourse } from '../models/home.model'
import { useUserStore } from './user'
import { getAllCourses } from '~/services/firebase.service'

export const useGlobalStore = defineStore('global', () => {
  const userStore = useUserStore()
  const myCourses = ref<PlatformCourse[]>([])

  function storeMyCourses() {
    const response = getAllCourses(userStore.authToken)
    response.then((courses) => {
      console.log(userStore.user?.uid)
      for (let i = 0; i < courses.length; i++) {
        const element1 = courses[i]
        for (let j = 0; j < element1.students.length; j++) {
          const element2 = element1.students[j]
          if (element2 === userStore.user?.uid)
            myCourses.value.push(element1)
        }
      }
      console.log(myCourses)
    })
  }

  return {
    storeMyCourses,
    myCourses,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
