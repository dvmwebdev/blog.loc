<template>
  <div class="main">
    <div class="row">
      <div class="col-md-2"><div class="main__sidebar">s</div></div>
      <div class="col-md-10"><div class="main__content">c</div></div>
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
  display: flex;
  height: 100%;
}
.main__sidebar {
  height: 100%;
  border: 1px solid red;
}
.main__content {
  height: 100%;
  border: 1px solid red;
}
</style>
