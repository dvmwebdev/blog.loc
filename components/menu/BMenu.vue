<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <BMenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    <i @click="smallMenu = !smallMenu" class="pi pi-bars"></i>
  </div>
</template>

<script>
import BMenuItem from "@/components/menu/BMenuItem.vue";

export default {
  name: "recursive-menu",
  data: () => ({
    smallMenu: false,
    menuTree: [
      {
        label: "Home",
        icon: "pi pi-home",
        children: [
          {
            label: "level 1.1",
            children: [
              {
                label: "level 1.1.1",
                children: [
                  {
                    label: "level 1.1.1.1",
                  },
                ],
              },
            ],
          },
          {
            label: "level 1.2",
          },
        ],
      },
      {
        label: "Dashboard",
        icon: "pi pi-th-large",
        children: [
          {
            label: "level 2.1",
          },
          {
            label: "level 2.2",
          },
          {
            label: "level 2.3",
          },
        ],
      },
      {
        label: "Settings",
        icon: "pi pi-cog",
      },
    ],
  }),
  components: {
    BMenuItem,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  left: 0;
  top: 0;
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  i {
    position: fixed;
    left: 250px;
    font-size: 20px;
    top: 15px;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 50px;
    i {
      left: 20px;
    }
  }
}
</style>