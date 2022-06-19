import { createToast } from 'mosha-vue-toastify'
import Axios from 'axios'
import type { PlatformCourse, PlatformLesson, YoutubeVideo } from '~/models/home.model'
import { useUserStore } from '~/stores/user'

const BASE_URI
  = 'https://straight-a-6b04c-default-rtdb.europe-west1.firebasedatabase.app/'

const firebaseAxios = Axios.create({
  baseURL: BASE_URI,
  headers: {
    'Content-Type': 'application/json',
  },
})

const userStore = useUserStore()

firebaseAxios.interceptors.response.use(onFulfilled => onFulfilled.data)

export const getAllCourses = async () => {
  console.log('getMyCourses')
  try {
    const response = await firebaseAxios.get('courses.json', { params: { auth: userStore.authToken } })
    const courses: PlatformCourse[] = []

    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        const element = response[key]
        const course: PlatformCourse = {
          courseID: '',
          courseTitle: '',
          courseDescription: '',
          courselikes: 0,
          lessonIDs: [''],
          students: [''],
        }
        course.courseID = key
        course.courseDescription = element.courseDescription
        course.courseTitle = element.courseTitle
        course.courselikes = element.courselikes
        course.lessonIDs = element.lessons
        course.students = element.students
        courses.push(course)
      }
    }
    console.log(courses)
    return courses
  }
  catch (error: any) {
    createToast(error.message, { type: 'danger' })
  }
}

export const addNewCourse = async (
  courseTitle: string,
  courseDescription: string,
  students: string[],
  lessons: string[],
) => {
  console.log('addNewCourse')
  firebaseAxios.post('courses.json', { courseTitle, courseDescription, courselikes: 0, students, lessons }, { params: { auth: userStore.authToken } })
}

export const getAllLEssons = async () => {
  console.log('getAllLEssons')
  try {
    const response = await firebaseAxios.get('lessons.json', { params: { auth: userStore.authToken } })
    const lessons: PlatformLesson [] = []
    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        const element = response[key]
        const youtubeVideo: YoutubeVideo = {
          videoID: '',
          title: '',
          videoDate: '',
          description: '',
          likes: 0,
        }
        const lesson: PlatformLesson = {
          lessonID: '',
          youtubeVideo,
          publicNotes: '',
        }
        lesson.lessonID = key
        lesson.publicNotes = element.publicNotes
        lesson.youtubeVideo = element.youtubevideo
        lessons.push(lesson)
      }
    }
    return lessons
  }
  catch (error: any) {
    createToast(error.message, { type: 'danger' })
  }
}

export const getCourseLessons = async (input: string[]) => {
  const lessons: PlatformLesson[] = []

  const prom = new Promise<PlatformLesson[]>((resolve) => {
    if (lessons.length === input.length) {
      console.log('resolve')
      resolve(lessons)
    }
  })

  input.forEach(async (element: string) => {
    try {
      const response = await firebaseAxios.get(`lessons/${element}.json`, {
        params: { auth: userStore.authToken },
      })
      const lesson: PlatformLesson = {
        lessonID: element,
        publicNotes: response.publicNotes,
        youtubeVideo: response.youtubevideo,
      }
      lessons.push(lesson)
    }
    catch (error: any) {
      createToast(error.message, { type: 'danger' })
    }
  })
}

// export const getCourseLessons = async (input: string[]) => {
//   const lessons: PlatformLesson[] = []

//   const prom = new Promise<PlatformLesson[]>((resolve) => {
//     if (lessons.length === input.length) {
//       console.log('resolve')
//       resolve(lessons)
//     }
//   })

//   input.forEach(async (element: string) => {
//     try {
//       const response = await firebaseAxios.get(`lessons/${element}.json`, {
//         params: { auth: userStore.authToken },
//       })
//       const lesson: PlatformLesson = {
//         lessonID: element,
//         publicNotes: response.publicNotes,
//         youtubeVideo: response.youtubevideo,
//       }
//       lessons.push(lesson)
//     }
//     catch (error: any) {
//       createToast(error.message, { type: 'danger' })
//     }
//   })

//   // for (let i = 0; i < input.length; i++) {
//   //   const element = input[i]
//   //   console.log('object1')
//   //   try {
//   //     const response = await firebaseAxios.get(`lessons/${element}.json`, {
//   //       params: { auth: userStore.authToken },
//   //     })
//   //     const lesson: PlatformLesson = {
//   //       lessonID: element,
//   //       publicNotes: response.publicNotes,
//   //       youtubeVideo: response.youtubevideo,
//   //     }
//   //     lessons.push(lesson)
//   //     console.log('object2')
//   //   }
//   //   catch (error: any) {
//   //     createToast(error.message, { type: 'danger' })
//   //   }
//   // }
//   // return lessons
// }
