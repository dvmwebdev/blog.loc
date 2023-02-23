<template>
  <ul class="nestedset-menu">
    <li
      v-for="menuItem in items"
      :key="menuItem.id"
      :class="{ 'has-children': menuItem.children?.length > 0 }"
    >
      <a :href="menuItem.url">{{ menuItem.name }}</a>
      <BMenuItem
        :items="menuItem.children"
        v-if="menuItem.children.length > 0"
      />
    </li>
  </ul>
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
  components: {
    BMenuItem: this,
  },
};
</script>

<style lang="scss">
.nestedset-menu {
  list-style: none;
  margin: 0;
  padding: 0;

  .has-children {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -4px;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-right: 4px solid #666;
      border-bottom: 4px solid transparent;
    }

    & > ul {
      display: none;
      padding: 0;
      margin: 0 0 0 10px;

      & > li {
        margin: 0;
        padding: 0;
      }

      & > .has-children > a {
        padding-right: 20px;

        &:after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -4px;
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-right: 4px solid #666;
          border-bottom: 4px solid transparent;
        }
      }
    }

    & > a:hover + ul {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
