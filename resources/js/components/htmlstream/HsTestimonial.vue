<template>
    <div>
        <blockquote class="u-blockquote-v2 rounded mb-5"><slot></slot></blockquote>
        <div class="media u-font-size-90">
            <!-- Avatar -->
            <img v-if="avatar" class="d-flex align-self-center rounded-circle u-blockquote-v2__image u-box-shadow-lg mx-3 mt-2" :src="avatar" alt="Image description">

            <!-- Body -->
            <div class="media-body align-self-center">
                <!-- Title -->
                <strong class="d-block">{{title}}</strong>

                <!-- Subtitle -->
                <span class="u-font-size-75 text-dark">{{subtitle}}</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      avatar: {
        type: String,
        default: false
      }
    }
  }
</script>