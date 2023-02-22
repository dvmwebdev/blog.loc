<template>
  <div class="grid grid-nogutter">
    <div class="sidebar__left col-fixed h-full">
      <MegaMenu :model="items" orientation="vertical" />
    </div>
    <div class="col">content<Nuxt /></div>
    <div class="sidebar__right col-fixed">sr</div>
  </div>
</template>

<script>
export default {
  name: "BMain",
  data() {
    return {
      items: [
        {
          id: 1,
          label: "totam",
          parent_id: null,
          items: [
            [
              {
                id: 11,
                label: "aperiam",
                parent_id: 3,
                items: [],
              },
            ],
          ],
        },
        {
          id: 2,
          label: "ut",
          parent_id: null,
          items: [],
        },
        {
          id: 3,
          label: "rerum",
          parent_id: null,
          items: [
            [
              {
                id: 11,
                label: "aperiam",
                parent_id: 3,
                items: [],
              },
              {
                id: 12,
                label: "suscipit",
                parent_id: 3,
                items: [],
              },
              {
                id: 13,
                label: "commodi",
                parent_id: 3,
                items: [],
              },
              {
                id: 14,
                label: "quia",
                parent_id: 3,
                items: [],
              },
              {
                id: 15,
                label: "explicabo",
                parent_id: 3,
                items: [],
              },
              {
                id: 16,
                label: "tempore",
                parent_id: 3,
                items: [],
              },
            ],
          ],
        },
        {
          id: 4,
          label: "enim",
          parent_id: null,
          items: [
            {
              id: 17,
              label: "quaerat",
              parent_id: 4,
              items: [],
            },
            {
              id: 18,
              label: "expedita",
              parent_id: 4,
              items: [],
            },
            {
              id: 19,
              label: "expedita",
              parent_id: 4,
              items: [],
            },
            {
              id: 20,
              label: "ut",
              parent_id: 4,
              items: [],
            },
            {
              id: 21,
              label: "fugiat",
              parent_id: 4,
              items: [],
            },
          ],
        },
        {
          id: 5,
          label: "itaque",
          parent_id: null,
          items: [
            {
              id: 22,
              label: "iure",
              parent_id: 5,
              items: [],
            },
            {
              id: 23,
              label: "nesciunt",
              parent_id: 5,
              items: [],
            },
            {
              id: 24,
              label: "architecto",
              parent_id: 5,
              items: [],
            },
            {
              id: 25,
              label: "fugiat",
              parent_id: 5,
              items: [],
            },
            {
              id: 26,
              label: "tenetur",
              parent_id: 5,
              items: [],
            },
            {
              id: 27,
              label: "vel",
              parent_id: 5,
              items: [],
            },
          ],
        },
        {
          id: 6,
          label: "quasi",
          parent_id: null,
          items: [],
        },
        {
          id: 7,
          label: "id",
          parent_id: null,
          items: [],
        },
        {
          id: 8,
          label: "eum",
          parent_id: null,
          items: [],
        },
        {
          id: 9,
          label: "doloribus",
          parent_id: null,
          items: [],
        },
        {
          id: 10,
          label: "ipsam",
          parent_id: null,
          items: [],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  &__left {
    width: 320px;
    padding: 5px;
  }
  &__right {
    width: 320px;
  }
}
</style>
