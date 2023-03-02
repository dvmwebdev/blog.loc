<template>
  <div class="">
    <b-form-group>
      <b-form-input
        v-model="email"
        placeholder="Ведіть ваш email"
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="success" class="mt-1"
      >Оформити підписку</b-button
    >
  </div>
</template>

<script>
export default {
  name: "BSubscriber",
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style scoped></style>
