<template>
  <div class="flex flex-column min-h-screen">
    <BHeader />
    <main class="flex-grow-1 h-full"><BMain /></main>
    <footer>f</footer>
  </div>
</template>

<script>
import BHeader from "@/components/layouts/site/BHeader.vue";
import BMain from "@/components/layouts/site/BMain.vue";

export default {
  name: "site",
  components: { BMain, BHeader },
};
</script>

<style scoped></style>