<template>
  <div class="admin__layout">
    <div class="admin-layout__sidebar">
      <BAMenu />
    </div>
    <div class="admin-layout__main">
      <div class="admin-layout__topbar">admin-layout__topbar</div>
      <div class="admin-layout__content"><Nuxt /></div>
      <div class="admin-layout__footer">admin-layout__footer</div>
    </div>
  </div>
</template>

<script>
import BAMenu from "@/components/layouts/admin/BAMenu.vue";

export default {
  name: "admin",
  components: { BAMenu },
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
    width: 100%;
    position: fixed;
    flex-shrink: 0;
    height: 80px;
    top: 0;
    z-index: 998;
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