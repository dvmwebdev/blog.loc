<template>
  <b-container fluid class="">
    <b-row>
      <div class="col-2">
        <div class="sidebar__left">
          <BMenu />
        </div>
      </div>
      <div class="col-7"><Nuxt /></div>
      <div class="col-3"><div class="sidebar__right">sr</div></div>
    </b-row>
  </b-container>
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
    padding: 5px;
  }
  &__right {
  }
}
</style>