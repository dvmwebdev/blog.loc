<template>
  <div class="">
    <div v-for="post in postsLatest" :key="post.id" class="">
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
    this.$store.dispatch("post/fetchPostsLatest");
  },
  computed: {
    postsLatest() {
      return this.$store.getters["post/getPostsLatest"];
    },
  },
};
</script>

<style scoped></style>