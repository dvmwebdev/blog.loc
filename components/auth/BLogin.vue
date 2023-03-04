<template>
<div class="">
  <b-form-group>
    <b-form-input v-model="email" placeholder="Email"></b-form-input>
  </b-form-group>
  <b-form-group>
  <b-form-input v-model="password" placeholder="Пароль"></b-form-input>
  </b-form-group>
  <b-button variant="primary">Війти</b-button>
</div>
</template>

<script>
export default {
  name: "BLogin",
  data(){
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>