<template>
  <div id="app">
    <comp-top-bar />
    <main class="max-w-6xl mx-auto">
      <router-view />
    </main>
    <comp-footer />
  </div>
</template>

<script>
import compTopBar from "@/components/compTopBar.vue";
import compFooter from "@/components/compFooter.vue";
export default {
  name: "App",
  components: {
    compTopBar,
    compFooter
  }
};
</script>
