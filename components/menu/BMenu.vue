<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <BMenuItem
      v-for="(item, index) in items"
      :key="index"
      :data="item.children"
      :label="item.name"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    <i @click="smallMenu = !smallMenu" class=""></i>
  </div>
</template>

<script>
import BMenuItem from "@/components/menu/BMenuItem.vue";

export default {
  name: "recursive-menu",
  data: () => ({
    smallMenu: false,
    items: [
      {
        id: 1,
        name: "Програмування",
        children: [
          {
            id: 11,
            name: "JavaScript",
            children: [],
          },
          {
            id: 12,
            name: "PHP",
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: "ПК",
        children: [
          {
            id: 15,
            name: "Підбір конфігурації",
            children: [],
          },
          {
            id: 16,
            name: "Ремонт",
            children: [],
          },
          {
            id: 17,
            name: "Проблеми і їх вирішення",
            children: [],
          },
        ],
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
  transition: all 0.3s ease;
  overflow: auto;
  background-color: #fff;
  border-radius: 5px;
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