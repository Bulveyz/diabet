<template>
  <div :class="['sidebar', 'fixed-top', {'active': show}]">
    <div class="mt-5 text-right pr-4">
      <i class="fa fa-times" @click="toggle"></i>
    </div>

    <div class="sidebar-items" v-if="!auth">
      <sidebar-item title="Log In" icon="fa fa-sign-in-alt" link="login"></sidebar-item>
      <sidebar-item title="Sign Up" icon="fa fa-plus" link="register"></sidebar-item>
    </div>
  </div>
</template>

<script>
  import SidebarItem from "./SidebarItem";
  export default {
    name: "SideBar",
    components: {SidebarItem},
    props: {
      auth: false
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      toggle() {
        this.show = !this.show;
      }
    },
    mounted() {
      Event.listen('toggleSidebar', this.toggle);
    },
  }
</script>

<style scoped>
  .sidebar {
    top: 0;
    left: 100% !important;
    height: 100vh;
    width: 100%;
    background-color: #fff;
    z-index: 10000;
    opacity: 0;
    transition: .5s;
    background-image: url("/images/overlaySideBar.svg");
    background-repeat: no-repeat;
  }

  .sidebar.active {
    left: 0 !important;
    opacity: 1;
  }

  .fa-times {
    font-size: 30px;
    color: #59287a;
  }
</style>