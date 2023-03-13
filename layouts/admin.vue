<template>
  <div class="admin__layout"><BAHeader /><BAMain /></div>
</template>

<script>
import BAHeader from "@/components/admin/layout/BAHeader.vue";
import BAMain from "@/components/admin/layout/BAMain.vue";

export default {
  name: "admin",
  components: { BAMain, BAHeader },
};
</script>

<style scoped lang="scss">
.admin__layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>