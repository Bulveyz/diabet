<template>
  <div class="sidebar-item p-3">
    <router-link class="d-flex" :to="link"><i :class="[icon, 'mr-3']"></i><p>{{title}}</p></router-link>
  </div>
</template>

<script>
  export default {
    name: "SidebarItem",
    props: {
      title: {
        type: String
      },
      link: {
        type: String
      },
      icon: {
        type: String
      }
    }
  }
</script>

<style scoped>
a {
  color: #b5b5b5 !important;
}

.router-link-exact-active {
  color: #59287a !important;
}

.fa {
  margin-top: 2px;
  font-size: 24px;
}
</style>