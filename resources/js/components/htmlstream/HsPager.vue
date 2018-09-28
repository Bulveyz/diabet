<template>
    <nav aria-label="Bootstrap Pager Example">
        <ul class="list-unstyled d-flex justify-content-between align-items-center mb-0">
            <!-- Left Button -->
            <li>
                <a :href="prevPage" :class="['btn btn-primary pager-btn', {'disabled': value == 1}]" @click="valueLocal--"><span class="mr-1">&larr;</span>
                    {{prevText}}
                </a>
            </li>

            <!-- Page Count -->
            <li>
                <span class="text-muted">Page {{value}} of {{pages}}</span>
            </li>

            <!-- Right Button -->
            <li>
                <a :href="nextPage" :class="['btn btn-primary pager-btn', {'disabled': value == pages}]" @click="valueLocal++">{{nextText}} <span class="ml-1">&rarr;</span></a>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'hs-pager',
    props: {
      pages: {
        default: 1,
        required: true
      },
      prevText: {
        type: String,
        default: 'Previous'
      },
      nextText: {
        type: String,
        default: 'Next'
      },
      nextPage: {
        type: String,
        default: '#!'
      },
      prevPage: {
        type: String,
        default: '#!'
      },
      value: {
        default: 1
      }
    },
    data() {
      return {
        valueLocal: this.value
      }
    },
    watch: {
      valueLocal() {
        this.updatePager();
      }
    },
    methods: {
      updatePager() {
        this.$emit('input', this.valueLocal)
      }
    }
  }
</script>

<style scoped>

</style>