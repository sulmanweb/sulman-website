<template>
  <div id="app">
    <comp-top-bar />
    <main class="max-w-5xl mx-auto">
      <router-view />
    </main>
    <comp-footer />
  </div>
</template>

<script>
import CompTopBar from "@/components/compTopBar.vue";
import CompFooter from "@/components/compFooter.vue";
export default {
  name: "App",
  components: {
    CompTopBar,
    CompFooter
  }
};
</script>
