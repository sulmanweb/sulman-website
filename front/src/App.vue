<template>
  <div id="app">
    <comp-top-bar />
    <main class="max-w-6xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import compTopBar from "@/components/compTopBar.vue";
export default {
  name: "App",
  components: {
    compTopBar
  }
};
</script>
