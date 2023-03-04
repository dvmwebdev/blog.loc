<template>
  <div class="post__item d-flex overflow-hidden">
    <b-row>
      <b-col sm="2" md="2">
        <div class="h-100">
          <img :src="post.image" alt="" class="h-100"/>
        </div>
      </b-col>
      <b-col sm="10" md="10">
        <div class="p-4">
          <h3>{{ post.title }}</h3>
          <div class="d-flex flex-column justify-content-between">{{ post.description }}</div>
          <div class="d-flex justify-content-between">
            <div class="">
              <b-icon icon="calendar-date" class="mr-1"></b-icon>{{ post.create }}
            </div>
            <div class="">
              <b-icon icon="hand-thumbs-up-fill" style="color: green"></b-icon
              >{{ post.likes }}
              <b-icon icon="hand-thumbs-down-fill" style="color: red"></b-icon
              >{{ post.dislikes }}
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
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
img {
  width: 200px;
}
</style>
