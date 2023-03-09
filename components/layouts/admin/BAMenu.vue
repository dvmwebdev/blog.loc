<template>
  <div class="admin-layout__nav">
    <NuxtLink to="/admin" class="item" style="padding: 13px 0">
      <span>Адмін панель</span>
    </NuxtLink>
    <div class="admin-menu__item">
      <div class="item">
        <div class="header">Блог</div>
        <div class="menu">
          <div class="item">
            <NuxtLink to="/admin/category"
              ><b-icon icon="list"></b-icon> Категорії</NuxtLink
            >
          </div>
          <div class="item"><b-icon icon="file-text"></b-icon> Пости</div>
          <div class="item"><b-icon icon="tags"></b-icon> Теги</div>
        </div>
      </div>
    </div>
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

  .admin-menu__item {
    > .item {
      margin: 0.7em 0 1.6em 0;
      > .header {
        margin-bottom: 1em;
        padding-left: 1.5em;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 700;
      }
      > .menu {
        > .item {
          display: block;
          margin-right: 5px;
          padding: 0.4em 1.3em;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
</style>
