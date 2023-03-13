<template>
  <div class="main">
    <div class="d-flex h-100">
      <div class="main__sidebar">s</div>
      <div class="main__content">c</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BAMain",
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.main__sidebar {
  width: 300px;
  height: 100%;
  background-color: #05154f;
  color: #deedff;
  border: 1px solid red;
}
.main__content {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
</style>
