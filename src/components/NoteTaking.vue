<script setup lang="ts">
const props = defineProps(['modelValue'])

const emits = defineEmits(['update:modelValue'])
const innerModel = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value)
  },
})
</script>

<template>
  <div>
    <h1>You can enter notes here</h1>
    <input v-model="innerModel" class="w-full h-sm bg-gray-500" type="text" placeholder="enter here">
  </div>
</template>
