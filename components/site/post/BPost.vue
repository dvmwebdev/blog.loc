<template>
  <div class="">
    <div v-for="post in posts" :key="post.id" class="">
      <BPostItem :post="post" />
    </div>
  </div>
</template>

<script>
import BPostItem from "@/components/site/post/BPostItem.vue";

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