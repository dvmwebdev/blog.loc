<template>
  <div class="d-flex flex-column vh-100">
    <BHeader />
    <main class="main"><BMain /></main>
    <footer>f</footer>
  </div>
</template>

<script>
import BHeader from "@/components/site/layout/BHeader.vue";
import BMain from "@/components/site/layout/BMain.vue";

export default {
  name: "site",
  components: { BMain, BHeader },
};
</script>

<style scoped>
.main {
  flex-grow: 1;
}
</style>