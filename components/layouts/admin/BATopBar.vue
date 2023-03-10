<template>
  <div class="admin-layout__topbar">
    <div class="ui borderless menu">
      <a
        class="icon item"
        id="sidebar-toggle"
        title="Бічна панель"
        data-layout-toggle=""
      >
        <i class="sidebar icon"></i>
      </a>
      <NuxtLink to="/" target="_blank" class="item">Перейти до блогу</NuxtLink>
      <div class="item">
        <form method="get" action="/admin/products/">
          <div class="ui transparent left icon input">
            <input
              type="text"
              name="criteria[search][value]"
              placeholder="Пошук товарів..."
            />
            <i class="search link icon"></i>
          </div>
        </form>
      </div>
      <div class="ui floated simple dropdown item" tabindex="0">
        <img
          style="margin-right: 10px"
          class="ui avatar image"
          src="http://localhost:8000/media/cache/sylius_admin_admin_user_avatar_thumbnail/84/c4/3bd04145f5792e15a178a4e35d82.jpg"
        />
        <span>John</span>
        <i class="dropdown icon" tabindex="0"
          ><div class="menu" tabindex="-1"></div
        ></i>
        <div class="menu" tabindex="-1">
          <a href="/admin/users/2/edit" class="item">
            <i class="user icon"></i>
            Мій обліковий запис
          </a>
          <a href="/admin/logout" id="sylius-logout-button" class="item">
            <i class="sign out icon"></i>
            Вихід
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BATopBar",
};
</script>

<style scoped></style>
