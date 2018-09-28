<template>
  <div class="fixed-bottom bg-white p-3 d-flex justify-content-around">
    <router-link to="eat">
      <i class="fa fa-cutlery" aria-hidden="true"></i>
    </router-link>
    <router-link to="products">
      <i class="fa fa-apple" aria-hidden="true"></i>
    </router-link>
    <router-link to="/">
      <i class="fa fa-book" aria-hidden="true"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "BottomBar"
  }
</script>

<style scoped>
.fa {
  font-size: 24px;
  color: #D7D7D7;
}
</style>