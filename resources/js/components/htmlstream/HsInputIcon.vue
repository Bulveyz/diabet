<template>
    <span class="form-icon-wrapper">
        <span class="form-icon" :class="'form-icon--' + iconAlign">
          <i :class="icon" class="form-icon__item"></i>
        </span>
         <input :id="id" :name="name" :disabled="disabled" :type="type" :placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :required="required"
                class="form-control"
                :class="[objectClasses, 'form-icon-input-' + iconAlign, 'is-' + valid, ' form-control-' + size]">
      </span>
</template>

<script>
  export default {
    name: 'hs-input-icon',
    data() {
      return {
        value: ''
      }
    },
    props: {
      pilled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      id: {
        type: String
      },
      size: {
        type: String,
        default: 'md'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        required: true
      },
      iconAlign: {
        default: 'left'
      },
      placeholder: {
        default: null
      },
      valid: {
        type: String
      },
      name: {
        type: String
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
    },
    computed: {
      objectClasses() {
        return {
          'form--pill': this.pilled,
        }
      }
    }
  }
</script>