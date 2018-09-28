<template>
  <div class="sidebar-toggle text-right" @click="toggle">
    <i class="fa fa-bars"></i>
  </div>
</template>

<script>
  export default {
    name: "TogglerSidebar",
    methods: {
      toggle() {
        Event.fire('toggleSidebar');
      }
    }
  }
</script>

<style scoped>
.fa-bars {
  font-size: 28px;
}
</style>