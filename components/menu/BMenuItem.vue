<template>
  <div class="menu__list">
    <div v-for="menuItem in items" :key="menuItem.id">
      <a v-on:mousemove="subMenuShow" :href="menuItem.url">{{
        menuItem.name
      }}</a>
      <div v-if="menuItem.children.length > 0">
        <div
          v-for="item in menuItem.children"
          :key="item.id"
          class="sub"
          :class="{ block: showSub }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BMenuItem",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showSub: false,
    };
  },
  methods: {
    subMenuShow() {
      this.showSub = true;
    },
  },
};
</script>

<style lang="scss">
.menu__list {
  position: relative;
  display: inline-block;
}
.sub {
  display: none;
  margin-left: 10px;
}
</style>
