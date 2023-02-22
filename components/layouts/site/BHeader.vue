<template>
  <div class="">
    <header class="text-0">
      <div
        class="info flex justify-content-around align-items-baseline bg-blue-500 shadow-4"
      >
        <div class="email">admin@dvm.com</div>
        <div class="phone font-bold">
          <i class="pi pi-phone text-xl"></i> +380(67) 959-57-85
        </div>
        <div class="social">
          <i class="pi pi-youtube text-red-500 bg-white mr-1"></i
          ><i class="pi pi-telegram text-blue-500 bg-white mr-1"></i
          ><i class="pi pi-facebook text-blue-800 bg-white mr-1"></i>
        </div>
      </div>
      <div class="flex flex-column text-gray-600 text-center">
        <h1>БЛОГ</h1>
        <h3 class="">dvmwebdev</h3>
        <h4 class="">про все по чуть-чуть</h4>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "BHeader",
};
</script>

<style scoped></style>
