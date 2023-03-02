<template>
  <div class="post__item d-flex">
    <div class="">
      <img :src="post.image" alt="" />
    </div>
    <div class="p-4">
      <h3>{{ post.title }}</h3>
      <div class="">{{ post.description }}</div>
      <div class="d-flex justify-content-between">
        <div class=""><i class=""></i>{{ post.create }}</div>
        <div class="">
          <b-icon icon="hand-thumbs-up-fill" style="color: green"></b-icon
          >{{ post.likes }}
          <b-icon icon="hand-thumbs-down-fill" style="color: red"></b-icon
          >{{ post.dislikes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BPostItem",
  props: ["post"],
};
</script>

<style scoped>
.post__item {
  margin-bottom: 15px;
  background-color: #fff;
  border: 1px solid cadetblue;
  border-radius: 15px;
  box-shadow: 0 0 15px 5px rgba(36, 45, 222, 0.48);
}
</style>
