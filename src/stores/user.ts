import { acceptHMRUpdate, defineStore } from 'pinia'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import type { User } from 'firebase/auth/dist/auth'

export const useUserStore = defineStore('user', () => {
  /* ==================== refs START==================== */
  const user = ref<User>()
  const authToken = ref(
    'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5MGZiMWFlMDQ4YTU0OGZiNjgxYWQ2MDkyYjBiODY5ZWE0NjdhYzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RyYWlnaHQtYS02YjA0YyIsImF1ZCI6InN0cmFpZ2h0LWEtNmIwNGMiLCJhdXRoX3RpbWUiOjE2NTU0ODQ4NTUsInVzZXJfaWQiOiJicUIwMENyZEpUYUZvZDJReVVBQ3pta1NPUTUzIiwic3ViIjoiYnFCMDBDcmRKVGFGb2QyUXlVQUN6bWtTT1E1MyIsImlhdCI6MTY1NTQ4NDg1NSwiZXhwIjoxNjU1NDg4NDU1LCJlbWFpbCI6InF3ZXJ0eTNAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlcnR5M0B0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jywBqU5gnmSdqCWrWHTHOUm_CooNd_eKdSS3aLWoZ-mhzyJiK1LyH7mWcJhOQ3nlAPRAU1_Zw40FCRkbajulXa6GH3K8F0yCJ-kFq4Y7RV4kSG_9aGtt93iWvh9kqh_tYNA7EpHy4rF3G1GYRXLP2LI-Bp8qYTWIggHYQENt9k6Qg1LlpBLVCIh9UBRXP3Y7ALDwOgAYZm9LD79uRCM47DHctgQUeV2tbZpSUDV-BKXi63BD-rmv6w0mDy5HyvdPayMy7rF5J82jlUyvG9pjwL7ZEULCHCNmLcxOZ7wTrhrqxJHmkg0hzxOuPFhCszLm6PfZYtJvl2iR5r_yGJv9HA',
  )
  // const previousNames = ref(new Set<string>())
  /* ==================== refs END==================== */

  /* ==================== computed START==================== */
  // const usedNames = computed(() => Array.from(previousNames.value))
  // const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))
  /* ==================== computed END==================== */

  /* ==================== constants START==================== */
  const auth = getAuth()
  /* ==================== constants END==================== */

  function signupUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        user.value = userCredential.user
        // ...
        user.value.getIdToken().then((response) => {
          authToken.value = response
          console.log(authToken.value)
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      // ..
      })
  }

  function signinUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        user.value = userCredential.user
        user.value.getIdToken().then((response) => {
          authToken.value = response
          console.log(authToken.value)
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return {
    signupUser,
    signinUser,
    user,
    authToken,
    // otherNames,
    // savedName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
