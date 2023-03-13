<template>
  <b-container fluid class="">
    <b-row>
      <div class="col-2">
        <div class="sidebar__left">
          <BMenu />
        </div>
      </div>
      <div class="col-7"><Nuxt /></div>
      <div class="col-3">
        <div class="sidebar__right">
          <div class="auth">
            <BLogin />
          </div>
          <BSubscriber />
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import BMenu from "@/components/common/menu/BMenu.vue";
import BSubscriber from "@/components/site/layout/BSubscriber.vue";
import BLogin from "@/components/site/auth/BLogin.vue";

export default {
  name: "BMain",
  components: {
    BLogin,
    BSubscriber,
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