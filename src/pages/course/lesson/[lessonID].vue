<script setup lang="ts">
import YoutubeVideo1 from '~/components/YoutubeVideo.vue'
import NoteTakingVue from '~/components/NoteTaking.vue'
import type { YoutubeVideo } from '~/models/home.model'

const route = useRoute()

const YoutubeVideoVar = ref<YoutubeVideo>({
  id: 'NtY0utjtmjE',
  title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
  videoDate: '22.05.22',
  description: 'greatest video of all times',
  likes: 2000,
})
/* ==================== refs START==================== */
const privateNotes = ref('this are private notes')
const publicNotes = ref('this is public notes')
const notes = privateNotes

/* ==================== refs END==================== */

const showPrivateNotes = () => {
  notes.value = privateNotes.value
}

const showPublicNotes = () => {
  notes.value = publicNotes.value
}

console.log(route.params.lessonID)
console.log('route query')
console.log(route.params)

// eslint-disable-next-line vue/component-definition-name-casing
defineComponent({ name: 'lesson-lessonID' })
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div><youtube-video1 :video="YoutubeVideoVar" /></div>
    <div>
      <div class="flex justify-between">
        <button @click="showPublicNotes">
          public notes
        </button>
        <button @click="showPrivateNotes">
          private notes
        </button>
      </div>
      <NoteTakingVue v-model="notes" />
    </div>
  </div>
</template>
