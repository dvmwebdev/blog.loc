<template>
  <div class="grid grid-nogutter">
    <div class="sidebar__left col-fixed h-full">
      <BMenu />
    </div>
    <div class="col">content<Nuxt /></div>
    <div class="sidebar__right col-fixed">sr</div>
  </div>
</template>

<script>
import BMenu from "@/components/menu/BMenu.vue";

export default {
  name: "BMain",
  components: {
    BMenu,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  &__left {
    width: 320px;
    padding: 5px;
  }
  &__right {
    width: 320px;
  }
}
</style>
