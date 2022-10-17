<template>
  <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
    <div class="relative flex flex-col md:flex-row">
    <router-link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
      <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">🎉😙</span>
    </router-link>
    <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 md:border-r">
      <router-link to="/" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Accueil</router-link>
      <router-link to="/bring" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Apporter</router-link>
    </nav>
    </div>
  </div>
  <router-view />
  <footer class="flex justify-center">
    <section class="text-gray-700 bg-white body-font ">
      <div class="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row ">
        <p>🎉😙</p>
        <p class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">Made with 💛 by Clem's</p>
      </div>
    </section>
  </footer>
</template>
