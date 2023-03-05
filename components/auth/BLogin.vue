<template>
  <div class="">
    <form @submit.prevent="login">
      <b-form-group>
        <b-form-input v-model="email" placeholder="Email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="password" placeholder="Пароль"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Війти</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "BLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let res = await this.$auth.loginWith("laravelJWT", {
          data: { email: this.email, password: this.password },
        });
        console.log(res.data);
      } catch (e) {
        console.log(e.response.data);
      }
    },
  },
};
</script>

<style scoped></style>
