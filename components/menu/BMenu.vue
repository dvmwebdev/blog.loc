<template>
  <div>
    <BMenuItem :items="items" />
  </div>
</template>

<script>
import BMenuItem from "@/components/menu/BMenuItem.vue";

export default {
  name: "BMenu",
  components: {
    BMenuItem,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "voluptas",
          children: [],
        },
        {
          id: 2,
          name: "beatae",
          children: [
            {
              id: 11,
              name: "repudiandae",
              children: [
                {
                  id: 110,
                  name: "repudiandae3",
                  children: [],
                },
              ],
            },
            {
              id: 12,
              name: "velit",
              children: [],
            },
            {
              id: 13,
              name: "adipisci",
              children: [],
            },
            {
              id: 14,
              name: "facilis",
              children: [],
            },
          ],
        },
        {
          id: 3,
          name: "laudantium",
          children: [],
        },
        {
          id: 4,
          name: "adipisci",
          children: [
            {
              id: 15,
              name: "nihil",
              children: [],
            },
            {
              id: 16,
              name: "ipsa",
              children: [],
            },
            {
              id: 17,
              name: "veritatis",
              children: [],
            },
            {
              id: 18,
              name: "et",
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: "possimus",
          children: [],
        },
        {
          id: 6,
          name: "perferendis",
          children: [],
        },
        {
          id: 7,
          name: "dignissimos",
          children: [
            {
              id: 19,
              name: "aut",
              children: [],
            },
            {
              id: 20,
              name: "cupiditate",
              children: [],
            },
            {
              id: 21,
              name: "quia",
              children: [],
            },
          ],
        },
        {
          id: 8,
          name: "fuga",
          children: [
            {
              id: 22,
              name: "consequatur",
              children: [],
            },
            {
              id: 23,
              name: "et",
              children: [],
            },
            {
              id: 24,
              name: "ullam",
              children: [],
            },
            {
              id: 25,
              name: "hic",
              children: [],
            },
            {
              id: 26,
              name: "illo",
              children: [],
            },
          ],
        },
        {
          id: 9,
          name: "ut",
          children: [],
        },
        {
          id: 10,
          name: "nisi",
          children: [],
        },
      ],
    };
  },
};
</script>
