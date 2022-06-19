<script setup lang="ts">
import type { PropType } from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import type { YoutubeVideo } from '~/models/home.model'
import 'vue-lite-youtube-embed/dist/style.css'
// interface YoutubeVideoInterface {
//   video: YoutubeVideo
// }
// const props = defineProps<YoutubeVideoInterface>()
defineProps({ video: { required: true, type: Object as PropType<YoutubeVideo> } })
// const props = defineProps({ video: { requiered: true, type: Object } })
// console.log(props.video.id)
</script>

<template>
  <div>
    <LiteYouTubeEmbed :id="video.id" :title="video.title" />
  </div>
  <div>
    <p>{{ video.title }}</p>
    <p>{{ video.description }}</p>
    <p>{{ video.videoDate }}</p>
    <p>{{ video.likes }}</p>
  </div>
</template>
