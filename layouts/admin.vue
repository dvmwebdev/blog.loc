<template>
  <div class="admin__layout admin-layout--open">
    <div class="admin-layout__sidebar">
      <BAMenu />
    </div>
    <div class="admin-layout__main">
      <div class="admin-layout__topbar"><BATopBar></BATopBar></div>
      <div class="admin-layout__content"><Nuxt /></div>
      <div class="admin-layout__footer">admin-layout__footer</div>
    </div>
  </div>
</template>

<script>
import BAMenu from "@/components/layouts/admin/BAMenu.vue";
import BATopBar from "@/components/layouts/admin/BATopBar.vue";

export default {
  name: "admin",
  components: { BATopBar, BAMenu },
};
</script>

<style scoped lang="scss">
$layout-breakpoint: 768px;
$layout-topbar-height: 80px;
$layout-sidebar-width: 260px;
.admin__layout {
  min-height: 100vh;
  .admin-layout__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #1e212b;

    @media (min-width: $layout-breakpoint) {
      width: $layout-sidebar-width;
    }
  }

  .admin-layout__main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @media (min-width: $layout-breakpoint) {
      margin-left: 260px;
    }
  }

  .admin-layout__topbar {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100%;
    height: 80px;
  }

  &.admin-layout--open .admin-layout__topbar {
    left: 260px;
    width: calc(100% - 260px);
  }

  .admin-layout__content {
    flex-grow: 1;
    flex-shrink: 1;
    padding: 80px 30px 0 30px;
  }

  .admin-layout__footer {
    flex-shrink: 0;
    padding: 30px;
    margin-top: 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    text-align: right;
  }
}
</style>