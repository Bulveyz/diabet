<template>
  <header class="home-header pt-3">
    <div class="nav d-flex justify-content-around">
      <a href="/logout">
        <i class="fa fa-sign-out"></i>
      </a>
      <h3>Bulveyz Fit</h3>
      <router-link to="profile">
        <i class="fa fa-user"></i>
      </router-link>
    </div>
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style scoped>
.fa {
  margin-top: 10px;
  font-size: 24px;
}

a {
  color: #fff;
}
</style>