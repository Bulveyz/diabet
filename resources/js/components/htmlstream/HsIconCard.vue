<template>
    <div :class="['u-icon-block__col', {'u-icon-block__col--left-brd': border}]">
    <span :class="['u-icon mb-4', 'u-icon--size--' + uIconSize, 'u-icon-' + variant, {'rounded-circle': rounded}]">
        <slot></slot>
    </span>
        <h3 class="h5">{{title}}</h3>
        <p class="mb-0">{{subtitle}}</p>
    </div>
</template>
<script>
  export default {
    name: "hs-icon-card",
    props: {
      title: String,
      subtitle: String,
      uIconSize: {
        default: 'xl'
      },
      variant: {
        default: 'primary'
      },
      rounded: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: true
      }
    }
  }
</script>