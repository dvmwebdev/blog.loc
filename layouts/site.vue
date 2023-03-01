<template>
  <div class="">
    <BHeader />
    <main class=""><BMain /></main>
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