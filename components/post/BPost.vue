<template>
  <div class="">
    <div v-for="post in posts" :key="post.id" class="m-1">
      <BPostItem :post="post" />
    </div>
  </div>
</template>

<script>
import BPostItem from "@/components/post/BPostItem.vue";

export default {
  name: "BPost",
  data() {
    return {};
  },
  components: { BPostItem },
  created() {
    this.$store.dispatch("post/fetchPosts");
  },
  computed: {
    posts() {
      return this.$store.getters["post/getPosts"];
    },
  },
};
</script>

<style scoped></style>