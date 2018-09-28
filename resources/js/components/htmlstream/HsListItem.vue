<template>
    <li class="list-group-item">
        <div class="media">
            <!-- Image -->
            <div class="d-flex mr-3">
                <img v-if="img" class="rounded-circle u-box-shadow-sm mt-1" width="40" height="40" :src="img" alt="Htmlstream">
            </div>

            <!-- Body -->
            <div class="media-body">
                <p class="mb-0"><strong :class="{'mr-2': !badge}">{{title}}</strong> <span v-if="badge" class="badge mr-1" :class="'badge-' + badgeStatus">{{badge}}</span> {{action}}</p>
                <span class="u-font-size-75 text-dark">{{time}}</span>
            </div>
        </div>
    </li>
</template>

<script>
  export default {
    name: 'hs-list-item',
    props: {
      title: String,
      time: String,
      img: {
        default: false
      },
      action: String,
      badge: {
        default: false
      },
      badgeStatus: {
        type: String,
        default: 'primary'
      }
    }
  }
</script>

<style scoped>

</style>