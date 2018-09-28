<template>
    <div v-is-in-view-port="animate">
        <h5 class="u-font-size-90 mb-1">{{title}} - {{procent}}</h5>
        <div class="progress mb-3">
            <div :class="['progress-bar', 'bg-' + bg]" role="progressbar" :style="styles" :aria-valuenow="procent" :aria-valuemin="procent" aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      procent: {
        type: String,
        required: true
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
          width: 0
        }
      }
    },
    methods: {
      animate() {
        if (this.animation) {
          this.styles.width = this.procent;
        }
      },
    },
    mounted() {
      if (!this.animation) {
        this.styles.width = this.procent;
      }
    }
  }
</script>