<template>
    <div>

      <!-- Examples -->
      <hs-parallax id="examples" repeat="repeat-y" background-size="unset" :overlay="false" class="bg-dark u-content-space"  min-height="100%" src="src/assets/img/bg-pattern.png">
        <div class="container">
          <header class="w-md-50 mx-auto text-white text-center mb-8">
            <h2 class="h1 font-weight-light mb-1">Complete with Examples</h2>
            <p class="mb-4">We have created 5 beautiful complete pages with over 20 reusable and customizable UI Blocks to quickly start with the Stream UI Kit.</p>
            <router-link class="btn btn-primary py-3 px-4" to="home">
              <i class="fas fa-eye mr-2"></i> Preview Pages
            </router-link>
          </header>
        </div>

        <div class="container-fluid pt-6">
          <!-- Demo Examples -->
          <div class="row text-center text-white">
            <!-- Home Demo -->
            <div class="col-lg-3 mt-sm-0">
              <h5 class="mb-3">Home</h5>

              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <router-link to="home">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/demo/img1.jpg" alt="Hom Page">
              </router-link>

              <hr class="u-opacity-1 d-block d-lg-none my-5">
            </div>
            <!-- End Home Demo -->

            <!-- Services Demo -->
            <div class="col-lg-3">
              <h5 class="mb-3">Services</h5>

              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <router-link to="services">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/demo/img2.jpg" alt="Services Page">
              </router-link>

              <hr class="u-opacity-1 d-block d-lg-none my-5">
            </div>
            <!-- End Services Demo -->

            <!-- About Us Demo -->
            <div class="col-lg-3">
              <h5 class="mb-3">About Us</h5>

              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <router-link to="about-us">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/demo/img3.jpg" alt="About Us Page">
              </router-link>

              <hr class="u-opacity-1 d-block d-lg-none my-5">
            </div>
            <!-- End About Us Demo -->

            <!-- Profile & Contacts Demos -->
            <div class="col-lg-3">
              <div class="mb-6">
                <h5 class="mb-3">Profile <small>(About Me)</small></h5>

                <!-- Mockup Browser -->
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                      <g>
                        <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                      </g>
                      <g>
                        <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                        <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                        <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                      </g>
                    </svg>
                </figure>
                <!-- End Mockup Browser -->

                <router-link to="about-me">
                  <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/demo/img4.jpg" alt="About Me Page">
                </router-link>
              </div>

              <hr class="u-opacity-1 my-5">

              <h5 class="mb-3">Contacts</h5>

              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <router-link to="contacts">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/demo/img5.jpg" alt="Contact Us Page">
              </router-link>
            </div>
            <!-- End Profile & Contacts Demos -->
          </div>
          <!-- End Demo Examples -->
        </div>
      </hs-parallax>
        <!-- End Examples -->

        <!-- Bonus Files -->
      <hs-parallax repeat="repeat-y" background-size="unset" :overlay="false" class="u-content-space"  min-height="100%" src="src/assets/img/bg-pattern.png">
        <div class="container">
          <header class="w-md-50 mx-auto text-center mb-8">
            <h2 class="h1 font-weight-light mb-1">Bonus Files</h2>
            <p class="mb-4">Stream UI Kit includes all used images with a link to collection, SASS source files, gulp sources for completely free as a bonus.</p>
          </header>

          <!-- Images -->
          <div class="row">
            <div class="col-lg-5 align-self-center pr-lg-5 mb-5 mb-lg-0">
              <h2 class="font-weight-light mb-3">Free Images</h2>
              <p>All images are used from <strong class="text-primary">Unsplash</strong> and we included 100% all image sources in our download pacakge. In addition, all images can be easliy accessed in our unsplash collection.</p>
              <p>Access all images used in Stream - UI Kit for free.</p>
              <a class="btn btn-outline-primary" target="_blank" href="https://unsplash.com/collections/1572580/stream-ui-kit">
                <i class="fas fa-camera mr-2"></i> Free Use &amp; Download
              </a>
            </div>

            <div class="col-lg-7 order-first order-lg-last mb-4 mb-lg-0">
              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <a target="_blank" href="https://unsplash.com/collections/1572580/stream-ui-kit">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/bonus/stream-unsplash.jpg" alt="Unsplash Stream UI Kit Collection">
              </a>
            </div>
          </div>
          <!-- End Images -->

          <hr class="my-8">

          <!-- Icons -->
          <div class="row">
            <div class="col-lg-7 mb-4 mb-lg-0">
              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <a target="_blank" href="https://fontawesome.com/icons?d=gallery&m=free">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/bonus/stream-icons.jpg" alt="Font Awesome Icons">
              </a>
            </div>

            <div class="col-lg-5 align-self-center pl-lg-5">
              <h2 class="font-weight-light mb-3">950+ Icons</h2>
              <p>We used <strong class="text-primary">Font Awesome</strong> icons, the web’s most popular icon set and toolkit. It includes over 950 free icons suitable for any needs.</p>
              <p>Access to 950+ free icons used in Stream - UI Kit.</p>
              <a class="btn btn-outline-primary" target="_blank" href="https://fontawesome.com/icons?d=gallery&m=free">
                <i class="fab fa-font-awesome-flag mr-2"></i> Font Awesome Icons
              </a>
            </div>
          </div>
          <!-- End Icons -->

          <hr class="my-8">

          <!-- Modern Tools -->
          <div class="row u-content-space-bottom">
            <div class="col-lg-5 align-self-center pr-lg-5 mb-5 mb-lg-0">
              <h2 class="font-weight-light mb-3">Modern Toolkit</h2>
              <p>Buit with modern tools and approaches. We have inlcuded all <strong class="text-primary">SASS</strong> source files along with <strong class="text-primary">Gulp</strong> files. Change the primary color within a single line and do more with the power of SASS.</p>
              <p>Learn more how to intall and use these tools.</p>
              <a class="btn btn-outline-primary" target="_blank" href="https://htmlstream.com/public/preview/stream-ui-kit/docs.html">
                <i class="fas fa-book mr-2"></i> Read More in Docs
              </a>
            </div>

            <div class="col-lg-7 order-first order-lg-last mb-4 mb-lg-0">
              <!-- Mockup Browser -->
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 857 40" style="enable-background:new 0 0 857 40;" xml:space="preserve">
                  <g>
                    <path style="fill: #fff;" d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z"/>
                  </g>
                  <g>
                    <ellipse style="fill: #fb4143;" cx="28.5" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #fab633;" cx="48.4" cy="20.1" rx="6" ry="6"/>
                    <ellipse style="fill: #0dd157;" cx="68.4" cy="20.1" rx="6" ry="6"/>
                  </g>
                </svg>
              </figure>
              <!-- End Mockup Browser -->

              <a target="_blank" href="https://htmlstream.com/public/preview/stream-ui-kit/docs.html">
                <img class="img-fluid w-100 u-browser-img u-box-shadow-lg" src="src/assets/img-temp/bonus/stream-sources.jpg" alt="Unsplash Stream UI Kit Collection">
              </a>
            </div>
          </div>
          <!-- End Modern Tools -->
        </div>

        <!-- Free Download -->
        <section class="demo-download-section">
          <div class="js-parallax u-content-space u-box-shadow-lg bg-white rounded-md mx-3 mx-lg-5">
            <div class="container">
              <div class="text-center w-md-50 mx-auto py-5">
                <a class="display-4 d-inline-block mb-3 text-dark" target="_blank" href="https://github.com/htmlstreamofficial/stream-ui-kit"
                   v-b-tooltip.top.hover title="Star on Github"
                   data-original-title="Star stream-ui-kit on Github" >
                  <i class="fab fa-github"></i>
                </a>
                <p class="lead font-weight-normal mb-5">All these completly FREE under MIT license. You can use <strong class="text-primary">Stream UI Kit</strong> even commercially!</p>
                <a class="btn btn-primary u-box-shadow-lg py-3 px-4" href="https://htmlstream.com/templates/stream-ui-kit">
                  <i class="fas fa-cloud-download-alt mr-2"></i> Free Download Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <!-- End Free Download -->
      </hs-parallax>
        <!-- End Bonus Files -->

        <!-- Footer -->
        <footer class="bg-dark u-content-space-top pb-4" role="footer">
            <div class="container-fluid">
                <div class="px-md-3">
                    <!-- Social Sharing -->
                    <div class="text-center">
                        <h2 class="h5 font-weight-light text-white mb-4">Sharing is caring, support us by just sharing.</h2>

                        <div class="d-flex justify-content-center">
                            <!-- Facebook Share -->
                            <div class="mr-3 mb-2 mb-md-0">
                                <div class="fb-share-button demo-faceook-share"
                                     data-href="http://facebook.com/htmlstream"
                                     data-layout="button"
                                     data-size="large"
                                     data-mobile-iframe="true">
                                    <a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a>
                                </div>
                            </div>
                            <!-- End Facebook Share -->

                            <!-- Google Plus -->
                            <div class="mr-3 mb-2 mb-md-0">
                                <div class="g-plus" data-action="share" data-annotation="bubble" data-height="52"></div>
                            </div>
                            <!-- End Google Plus -->

                            <!-- Tweet -->
                            <div class="mr-3">
                                <a href="https://twitter.com/intent/tweet" class="twitter-share-button" data-size="large" data-text="Stream UI Kit is beautiful Open Source Bootstrap 4 UI Kit under MIT license." data-hashtags="StreamUIKit, Bootstrap, Freebies" data-related="htmlstream, freebies, bootstrap">@htmlstream</a>
                            </div>
                            <!-- End Tweet -->
                        </div>
                    </div>
                    <!-- End Social Sharing -->

                    <hr class="u-opacity-1 mb-4">
                </div>

                <!-- Copyright and Social Icons -->
                <div class="row px-md-3">
                    <div class="col-md-8 text-center text-md-left mb-3 mb-md-0">
                        <small class="text-white">&copy; 2018 <a class="text-white" href="https://htmlstream.com">Htmlstream</a>. All Rights Reserved.</small>
                    </div>

                    <div class="col-md-4 align-self-center">
                        <ul class="list-inline text-center text-md-right mb-0">
                            <li class="list-inline-item mx-2" v-b-tooltip.top.hover title="Facebook">
                                <a class="text-white" target="_blank" href="https://www.facebook.com/htmlstream">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item mx-2" v-b-tooltip.top.hover title="Instagram">
                                <a class="text-white" target="_blank" href="https://www.instagram.com/htmlstream">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="list-inline-item mx-2" v-b-tooltip.top.hover title="Twitter">
                                <a class="text-white" target="_blank" href="https://twitter.com/htmlstream">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item mx-2" v-b-tooltip.top.hover title="Dribbble">
                                <a class="text-white" target="_blank" href="https://dribbble.com/htmlstream">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- End Copyright and Social Icons -->
            </div>
        </footer>
        <!-- End Footer -->
    </div>
</template>

<script>
  import HsParallax from "./HsParallax";
  export default {
    name: "Examples",
    components: {HsParallax}
  }
</script>

<style scoped>

</style>