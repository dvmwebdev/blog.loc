<template>
  <div class="admin-layout__nav">
    <NuxtLink to="admin" class="item" style="padding: 13px 0">
      <span>Адмін панель</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "BAMenu",
};
</script>

<style scoped lang="scss">
.admin-layout__nav {
  a {
    text-decoration: none;
    background-color: transparent;
    :hover {
      text-decoration: none;
    }
  }
  span {
    display: block;
    text-align: center;
    font-size: 22px;
  }
  > * {
    display: block;
  }

  > .item:first-child,
  #sidebar.ui.sidebar.vertical.menu > .item:first-child {
    margin-bottom: 10px;
  }

  > a.item:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
