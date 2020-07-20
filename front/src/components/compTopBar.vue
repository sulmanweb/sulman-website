<template>
  <nav class="bg-cool-gray-700">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16 justify-between md:justify-evenly">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="@/assets/images/sulmanweb.jpg" alt="SulmanWeb" />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline">
              <router-link
                to="/"
                class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-cool-gray-700"
                :class="[
                  $route.path == '/'
                    ? 'text-white bg-cool-gray-900'
                    : 'text-cool-gray-300',
                ]"
              >Home</router-link>
              <router-link
                to="/blog"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-cool-gray-700"
                :class="[
                  $route.path.includes('blog')
                    ? 'text-white bg-cool-gray-900'
                    : 'text-cool-gray-300',
                ]"
              >Blog</router-link>
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-cool-gray-700"
                :class="[
                  $route.path.includes('about')
                    ? 'text-white bg-cool-gray-900'
                    : 'text-cool-gray-300',
                ]"
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
            <font-awesome-icon
              icon="bars"
              class="text-3xl text-cool-gray-400"
              :class="menuTopBarOpen ? 'hidden' : 'block'"
            />
            <font-awesome-icon
              icon="times"
              class="text-3xl text-cool-gray-400"
              :class="menuTopBarOpen ? 'block' : 'hidden'"
            />
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden" :class="menuTopBarOpen ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[
            $route.path == '/'
              ? 'text-white bg-cool-gray-900'
              : 'text-cool-gray-300',
          ]"
        >Home</router-link>
        <router-link
          to="/blog"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium"
          :class="[
            $route.path.includes('blog')
              ? 'text-white bg-cool-gray-900'
              : 'text-cool-gray-300',
          ]"
        >Blog</router-link>
        <router-link
          to="/about"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium"
          :class="[
            $route.path.includes('about')
              ? 'text-white bg-cool-gray-900'
              : 'text-cool-gray-300',
          ]"
        >About</router-link>
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
