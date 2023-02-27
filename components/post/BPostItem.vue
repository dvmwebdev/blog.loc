<template>
  <div class="post__item m-2 p-2 flex">
    <div class="">
      <img style="width: 150px" :src="post.url" alt="" />
    </div>
    <div class="flex flex-column justify-content-between p-2">
      <h3>{{ post.title }}</h3>
      <div class="">{{ post.description }}</div>
      <div class="flex justify-content-between">
        <div class="">
          <i class="pi pi-calendar mr-2"></i>{{ post.created_at }}
        </div>
        <div class="">
          <i class="pi pi-thumbs-up-fill mr-2 text-blue-700"></i
          >{{ post.likes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BPostItem",
  props: {
    post: {
      title: String,
      description: String,
      likes: String,
      created_at: String,
    },
  },
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
