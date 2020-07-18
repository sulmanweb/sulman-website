<template>
  <nav class="bg-cool-gray-700">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16 justify-between md:justify-evenly">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="@/assets/images/sulmanweb.jpg" alt="SulmanWeb" />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline">
              <router-link
                to="/"
                class="px-3 py-2 rounded-md text-sm font-medium text-white bg-cool-gray-900 focus:outline-none focus:text-white focus:bg-cool-gray-700"
              >Home</router-link>
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 focus:outline-none focus:text-white focus:bg-cool-gray-700"
              >Blog</a>
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 focus:outline-none focus:text-white focus:bg-cool-gray-700"
              >About</a>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-cool-gray-400 hover:text-white hover:bg-cool-gray-700 focus:outline-none focus:bg-cool-gray-700 focus:text-white"
            @click="menuTopBarOpen = !menuTopBarOpen"
          >
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="h-6 w-6"
              :class="menuTopBarOpen ? 'hidden' : 'block'"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="h-6 w-6"
              :class="menuTopBarOpen ? 'block' : 'hidden'"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden" :class="menuTopBarOpen ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-cool-gray-900 focus:outline-none focus:text-white focus:bg-cool-gray-700"
        >Home</router-link>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 focus:outline-none focus:text-white focus:bg-cool-gray-700"
        >Blog</a>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 focus:outline-none focus:text-white focus:bg-cool-gray-700"
        >About</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "compTopBar",
  data() {
    return {
      menuTopBarOpen: false
    };
  }
};
</script>