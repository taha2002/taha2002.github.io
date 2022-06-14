<template>
  <div>
    <html>

    <body style="background-image: url(https://play.tailwindcss.com/img/beams.jpg) !important;"></body>

    </html>


    <header id="top" class="main-hero">
      <div class="main-hero-text">
        <div class="content">
          <div v-if="coming_soon" class="coming_soon">
            <div class="main-hero-text">
              <h1>Great blog coming<br> soon. </h1>
            </div>
          </div>
          <div>
            <div class="text-loading-mask">
              <div class="text-loading-overlay is-reveal"></div>
              <h3 itemprop="specialty" class=" h5">Back-end Developer</h3>
            </div>
          </div>

        </div>
      </div>
      <div id="shapes-mask" class="is-loaded">
        <svg xmlns="http://www.w3.org/2000/svg" width="37.196" height="32.213"
          viewBox="0 0 37.196 32.213">
          <symbol id="triangle"><svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236"
              viewBox="0 0 25.675 22.236">
              <path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10"
                d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"></path>
            </svg>
          </symbol>
        </svg><svg xmlns="http://www.w3.org/2000/svg" width="29.093" height="14.546" viewBox="0 0 29.093 14.546">
          <symbol id="semiCircle">
            <path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10"
              d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"></path>
          </symbol>
        </svg><svg xmlns="http://www.w3.org/2000/svg" width="17.046" height="36.016" viewBox="0 0 17.046 36.016">
          <symbol id="spring">
            <path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10"
              d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255">
            </path>
          </symbol>
        </svg><svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
          <symbol id="line">
            <path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10" d="M4.92 2.514L21.964 19.56">
            </path>
          </symbol>
        </svg><svg width="25px" height="25px" class="layer1 p1" style="transform: matrix(-1, 0, 0, -1, 86.2308, -14);">
          <use xlink:href="#triangle" class="yellow"></use>
        </svg><svg width="28px" height="28px" class="layer1 p2" style="transform: matrix(1, 0, 0, 1, 86.2308, -14);">
          <use xlink:href="#semiCircle" class="yellow"></use>
        </svg><svg width="25px" height="25px" class="layer2 p3"
          style="transform: matrix(0.70711, 0.7071, -0.7071, 0.70711, -86.2308, 14);">
          <use width="25px" height="25px" xlink:href="#triangle" class="aqua"></use>
        </svg><svg class="layer1 p4" style="transform: matrix(1, 0, 0, 1, 86.2308, -14);">
          <use xlink:href="#triangle" class="pink"></use>
        </svg><svg width="28px" height="28px" class="layer1 p5"
          style="transform: matrix(0.70711, 0.7071, -0.7071, 0.70711, 86.2308, -14);">
          <use xlink:href="#semiCircle" class="aqua"></use>
        </svg><svg width="36px" height="36px" class="layer2 p6"
          style="transform: matrix(0.70711, 0.7071, -0.7071, 0.70711, -86.2308, 14);">
          <use xlink:href="#spring" class="pink"></use>
        </svg><svg width="36px" height="36px" class="layer2 p7" style="transform: matrix(1, 0, 0, 1, -86.2308, 14);">
          <use xlink:href="#spring" class="pink"></use>
        </svg><svg width="22px" height="22px" class="layer2 p8" style="transform: matrix(1, 0, 0, 1, -86.2308, 14);">
          <use xlink:href="#line" class="aqua"></use>
        </svg><svg width="22px" height="22px" class="layer1 p9"
          style="transform: matrix(0.42262, 0.90631, -0.90631, 0.42262, 86.2308, -14);">
          <use xlink:href="#line" class="aqua"></use>
        </svg><svg width="22px" height="22px" class="layer2 p10"
          style="transform: matrix(0.08716, 0.9962, -0.9962, 0.08716, -86.2308, 14);">
          <use xlink:href="#line" class="yellow"></use>
        </svg><svg width="28px" height="28px" class="layer1 p11" style="transform: matrix(-1, 0, 0, -1, 86.2308, -14);">
          <use xlink:href="#semiCircle" class="aqua"></use>
        </svg>
      </div>

      <ul itemscope="itemscope" itemtype="http://schema.org/Organization" class="social-vertical-stripe"><span
          itemprop="name" class="visual-hide">Taha Bouras</span>
        <link itemprop="url" href="index.html">
        <link itemprop="logo" href="icons/logo.svg">
        <li><a href="https://www.linkedin.com/in/taha-bouras/" target="_blank" rel="noopener" itemprop="sameAs"><img
              src="/icons/linkdin-white.svg"></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100007522123943" target="_blank" rel="noopener"
            itemprop="sameAs"><img src="/icons/facebook-white.svg"></a></li>
        <li><a href="https://github.com/taha2002" target="_blank" rel="noopener" itemprop="sameAs"><img
              src="/icons/github-white.svg"></a></li>
        <li><a href="mailto:tahadevbou@gmail.com" target="_blank" rel="noopener" itemprop="sameAs"><img
              src="/icons/email-white.svg"></a></li>
      </ul>

    </header>

    <div v-if="!coming_soon">
      <section class="
        ac
        a20
        a1p[150px]
        a1q[90px]
        a2H
        a1w
      ">
        <div class="a9">
          <div class="a6 a1t a7 aa[-16px]">
            <div class="a5 md:a1v/12 lg:a2I/12 ad">
              <div class="aB[570px] a2J md:a2K">
                <h1 class="a1f aI a1U sm:a1B a1H ">
                  Blog Page
                </h1>
                <p class="
                  a1J
                  aH
                  a1K
                  a1R
                ">
                  Lorem.
                </p>
              </div>
            </div>
            <div class="a5 md:a2j/12 lg:a2L/12 ad">
              <div class="a2M">
                <ul class="a6 a7 md:a1c">
                  <li class="a6 a7">
                    <NuxtLink to="/" class="
                      a1J aH a1K a2N
                      hover:aJ
                    ">
                      Home
                    </NuxtLink>
                    <span class="
                      ag
                      aT
                      aU
                      a2O
                      aW
                      a2P
                      aY
                      a1N
                    "></span>
                  </li>
                  <li class="a1J aH aJ">
                    Blog Grids
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span class="a1 a24 a3 a2D[-1]">
            <svg width="730" height="206" viewBox="0 0 730 206" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.08" width="136.991" height="563.705"
                transform="matrix(0.632736 0.774368 0.774368 -0.632736 -201.278 330.677)"
                fill="url(#paint0_linear_0:1)">
              </rect>
              <rect opacity="0.05" width="345.355" height="563.705"
                transform="matrix(0.632736 0.774368 0.774368 -0.632736 74 330.677)" fill="url(#paint1_linear_0:1)">
              </rect>
              <defs>
                <linearGradient id="paint0_linear_0:1" x1="68.4956" y1="0" x2="68.4956" y2="563.705"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4A6CF7"></stop>
                  <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_0:1" x1="172.678" y1="0" x2="172.678" y2="563.705"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4A6CF7"></stop>
                  <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span class="a1 a2 aZ a2D[-1]">
            <svg width="405" height="206" viewBox="0 0 405 206" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.08" width="289.718" height="563.705"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 603.461 -125.138)"
                fill="url(#paint0_linear_54:595)"></rect>
              <defs>
                <linearGradient id="paint0_linear_54:595" x1="144.859" y1="0" x2="144.859" y2="563.705"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4A6CF7"></stop>
                  <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
      <section class="a2Q">
        <div class="a9">
          <div class="a6 a1t aa[-16px] a1u">
            <div v-for="(post, index) in posts" :key="index" class="a5 lg:a2i/2 xl:a2i/3 ad">
              <div class=" az a2R a1w a1x a2S ">
                <a href="blog-details.html" class="ag">
                  <img :src="post.img" alt="image" class="a5">
                </a>
                <div class="ai ay sm:a2T">
                  <h3>
                    <a href="blog-details.html" class=" a1P a1V aI hover:aJ ag a28 a2U ">
                      {{ post.title }}
                    </a>
                  </h3>
                  <p class="a1J a1K aH a2V">
                    {{ post.description }}
                  </p>
                  <a :href="'/blog/' + post.slug" class=" a1J a1a aI a1S hover:aJ hover:a2W ">
                    Read More
                  </a>
                </div>
              </div>
            </div>

          </div>
          <!-- <div class="a6 a1t aa[-16px] wow fadeInUp" data-wow-delay=".15s"
          style="visibility: hidden; animation-delay: 0.15s; animation-name: none;">
          <div class="a5 ad">
            <ul class="a6 a7 a2X a1u">
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    hover:a1h hover:a2a
                    a8
                    hover:a1g
                    a1K ad a1a a30[36px] a2d
                  ">
                  Prev
                </a>
              </li>
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    hover:a1h hover:a2a
                    a8
                    hover:a1g
                    a1K ad a1a a30[36px] a2d
                  ">
                  1
                </a>
              </li>
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    hover:a1h hover:a2a
                    a8
                    hover:a1g
                    a1K ad a1a a30[36px] a2d
                  ">
                  2
                </a>
              </li>
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    hover:a1h hover:a2a
                    a8
                    hover:a1g
                    a1K ad a1a a30[36px] a2d
                  ">
                  3
                </a>
              </li>
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    a1K
                    ad
                    a1a
                    a30[36px]
                    a2d
                    a31
                  ">
                  ...
                </a>
              </li>
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    hover:a1h hover:a2a
                    a8
                    hover:a1g
                    a1K ad a1a a30[36px] a2d
                  ">
                  12
                </a>
              </li>
              <li class="a2Y">
                <a href="javascript:void(0)" class="
                    a6
                    a7
                    a1u
                    a12
                    a2Z
                    a2_[15%]
                    hover:a1h hover:a2a
                    a8
                    hover:a1g
                    a1K ad a1a a30[36px] a2d
                  ">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div> -->
        </div>
      </section>
    </div>
    <ContactForm />
  </div>
</template>

<script>


export default {
  created() {
    console.log('created')
    // const res = await fetch('http://localhost:3000/data/portfolio.json')
    // this.$store.commit("modules/portfolio/SET_POSTS", res)
  },
  mounted() {
    console.log('mounted')
    this.$fetch();
  },
  data: () => ({
    posts: [],
    coming_soon: true
  }),
  async fetch() {
    const res = await fetch("/data/blog.json")
    this.posts = await res.json()
  },
  fetchOnServer: false,
  name: "BlogPage",
  layout: "blog",
  head: {
    bodyAttrs: {
      class: "bright-theme"
    },
    link: [
      {
        rel: "stylesheet",
        href: "/css/ptailwind.css"
      }
    ]
  }
}
</script>

<style>
.coming_soon {
  height: 100vh;
  text-align: center;
}

#body {
  background-image: url(https://play.tailwindcss.com/img/beams.jpg) !important;
}
</style>