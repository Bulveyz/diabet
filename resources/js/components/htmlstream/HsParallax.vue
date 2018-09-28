<template>
  <!-- HtmlStream Parallax -->
  <div :class="[{'u-overlay--dark': overlay}, 'hs-parallax']"
       :style="[styles, {
              minHeight: minHeight,
              backgroundSize: backgroundSize,
              backgroundRepeat: repeat,
              backgroundImage: 'url(' + src + ')'
            }
          ]">

    <!-- HtmlStream Parallax Content-->
    <div :class="['content', 'text-' + textAlign]">
      <slot></slot>
    </div>
    <!-- End HtmlStream Parallax Content-->

  </div>
  <!-- End HtmlStream Parallax -->

</template>

<script>
  export default {
    name: "HsParallax",
    props: {
      speed: {
        type: Number,
        default: 0.2
      },
      repeat: {
        type: String,
        default: 'no-repeat'
      },
      backgroundSize: {
        type: String,
        default: 'cover'
      },
      offset: {
        type: Number,
        default: 200
      },
      src: {
        type: String,
        required: true
      },
      minHeight: {
        type: String,
        default: '500px'
      },
      overlay: {
        type: Boolean,
        default: true
      },
      textAlign: {
        type: String,
        default: 'center'
      }
    },
    data() {
      return {
        offsetHeight: 0,
        styles: '',
        scrollHeigthOfssetTop: 0
      }
    },
    methods: {
      handleScroll(event) {
        if (this.$el.offsetTop > 100) {
          this.scrollHeigthOfssetTop = Math.round(window.pageYOffset + screen.height);
        } else {
          this.scrollHeigthOfssetTop = Math.round(window.pageYOffset);
        }

        if (this.scrollHeigthOfssetTop > this.offsetHeight) {
          this.styles = {
            backgroundPosition: '50% -' + (this.scrollHeigthOfssetTop - this.offsetHeight) * this.speed + 'px'
          };
        }
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    mounted() {
      if (this.$el.offsetTop > 100) {
        this.offsetHeight = this.$el.offsetTop + this.offset;
      } else {
        this.offsetHeight = this.$el.offsetTop;
      }
    }
  }
</script>

<style>
  .hs-parallax {
    position: relative;
    width: 100%;
    background-position: 50% 0px;
  }

  .hs-parallax.promo .content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #fff;
    transform: translate3d(0, -50%, 0);
    z-index: 999;
  }

  @media (max-width: 1199px) {
    .hs-parallax {
      min-height: 100vh !important;
      background-attachment: fixed;
    }
  }
</style>