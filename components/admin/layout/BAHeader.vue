<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <NuxtLink to="/admin"
      ><b-navbar-brand>Адмін панель</b-navbar-brand></NuxtLink
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <NuxtLink to="/"><b-nav-item>Перейти до блогу</b-nav-item></NuxtLink>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content> User </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "BAHeader",
};
</script>

<style scoped></style>
