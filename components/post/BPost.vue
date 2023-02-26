<template>
  <div class="m-1">
    <BPostItem />
    <BPostItem />
    <BPostItem />
    <BPostItem />
  </div>
</template>

<script>
import BPostItem from "@/components/post/BPostItem.vue";

export default {
  name: "BPost",
  components: { BPostItem },
};
</script>

<style scoped></style>
