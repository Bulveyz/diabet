<template>
    <img :class="['img-fluid', {'rounded': !circle}, {'u-box-shadow-lg': shadow}, {'rounded-circle': circle}, {'img-thumbnail': thumb}]" :src="src" :alt="alt">
</template>

<script>
  export default {
    props: {
      shadow: {},
      src: {
        type: String,
        required: true
      },
      circle: {},
      thumb: {},
      alt: {
        type: String,
        default: 'Image'
      }
    }
  }
</script>

<style scoped>

</style>