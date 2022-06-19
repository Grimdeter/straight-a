<script setup lang="ts">
// const showMenu2 = ref(false)
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg class="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block text-xl mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block text-xl mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber mr-4">
          Examples
        </a>
        <router-link to="/addnewcourse" href="#responsive-header" class="mx-5 block text-xl mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber">
          addnewcourse
        </router-link>
        <router-link to="/addnewlesson" href="#responsive-header" class="mx-5 block text-xl mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber">
          addnewlesson
        </router-link>
        <router-link to="/coursechoice" href="#responsive-header" class="mx-5 block text-xl mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-amber">
          coursechoice
        </router-link>
      </div>
      <div>
        <router-link to="/signin" href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </router-link>
        <router-link to="/signup" href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </router-link>
      </div>
    </div>
  </nav>
</template>
