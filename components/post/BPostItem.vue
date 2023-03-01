<template>
  <div class="post__item">
    <div class="">
      <img style="width: 150px" :src="post.url" alt="" />
    </div>
    <div class="">
      <h3>{{ post.title }}</h3>
      <div class="">{{ post.description }}</div>
      <div class="f">
        <div class=""><i class=""></i>{{ post.create }}</div>
        <div class="">
          <i class=""></i>{{ post.likes }} <i class=""></i>{{ post.dislikes }}
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
  background-color: #fff;
  border: 1px solid cadetblue;
  border-radius: 15px;
  box-shadow: 0 0 15px 5px rgba(36, 45, 222, 0.48);
}
</style>
