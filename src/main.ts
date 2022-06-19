import { initializeApp } from 'firebase/app'
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const firebaseConfig = {
  apiKey: 'AIzaSyCKEsbPauj_wYB-YdfYL3qBeDKCXwWmSsc',
  authDomain: 'straight-a-6b04c.firebaseapp.com',
  databaseURL: 'https://straight-a-6b04c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'straight-a-6b04c',
  storageBucket: 'straight-a-6b04c.appspot.com',
  messagingSenderId: '128660095215',
  appId: '1:128660095215:web:b6a1c712f693499c591b1a',
}

const app = initializeApp(firebaseConfig)
const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
