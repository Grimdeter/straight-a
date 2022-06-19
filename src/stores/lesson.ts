import { acceptHMRUpdate, defineStore } from 'pinia'
import { child, get, getDatabase, ref as refdb, set } from 'firebase/database'
import type { YoutubeVideo } from '../models/home.model'

export const useLessonStore = defineStore('lesson', () => {
  /* ==================== refs START==================== */
  // const YoutubeVideo = ref<YoutubeVideo>()
  // const PlatformLesson = ref<PlatformLesson>()
  /* ==================== refs END==================== */

  /* ==================== computed START==================== */
  // const usedNames = computed(() => Array.from(previousNames.value))
  // const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))
  /* ==================== computed END==================== */

  /* ==================== constants START==================== */
  const db = getDatabase()
  const dbRef = refdb(getDatabase())
  /* ==================== constants END==================== */

  function createNewLesson(youtubevideo: YoutubeVideo, lessonID: string) {
    console.log('object')
    const publicNotes = 'these are public notes'
    set(refdb(db, `/lessons/${lessonID}`), {
      youtubevideo,
      publicNotes,
    })
  }

  async function getMyLessons() {
    const response = await get(child(dbRef, 'lessons/'))
    return response
    // .then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val())
    //     return snapshot.val()
    //   }
    //   else { console.log('No data available') }
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
  }

  return {
    createNewLesson,
    getMyLessons,
    // PlatformLesson,
    // YoutubeVideo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLessonStore, import.meta.hot))
