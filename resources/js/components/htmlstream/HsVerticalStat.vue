<template>
    <div v-is-in-view-port="animate">
        <div class="u-progress-bar-vertical rounded mb-3">
            <div :class="['u-progress-bar-vertical__indicator rounded-bottom', 'bg-' + bg]" :style="styles"></div>
        </div>
        <div class="small text-center">{{procent}}</div>
        <h4 class="h6 text-center">{{title}}</h4>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      procent: {
        type: String,
        default: 0
      },
      bg: {
        type: String,
        default: 'primary'
      },
      animation: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        styles: {
          height: 0
        }
      }
    },
    methods: {
      animate() {
        if (this.animation) {
          this.styles.height = this.procent;
        }
      },
    },
    mounted() {
      if (!this.animation) {
        this.styles.height = this.procent;
      }
    }
  }
</script>