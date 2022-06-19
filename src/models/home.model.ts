export interface YoutubeVideo {
  videoID: string
  title: string
  videoDate: string
  description: string
  likes: number
}

export interface PlatformUser {
  adminStatus: boolean
  userID: string
  availableCourseIDs: [string] // ID's of available courses
}

export interface PlatformLesson {
  lessonID: string
  youtubeVideo: YoutubeVideo
  publicNotes: string
}

export interface PlatformCourse {
  courseID: string
  courseTitle: string
  courseDescription: string
  courselikes: number
  lessonIDs: string[] // ID's of lessons inside course
  students: string[]
}
