<template>
  <div>
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
                  <a href="index.html" class="
                      a1J aH a1K a2N
                      hover:aJ
                    ">
                    Home
                  </a>
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
              transform="matrix(0.632736 0.774368 0.774368 -0.632736 -201.278 330.677)" fill="url(#paint0_linear_0:1)">
            </rect>
            <rect opacity="0.05" width="345.355" height="563.705"
              transform="matrix(0.632736 0.774368 0.774368 -0.632736 74 330.677)" fill="url(#paint1_linear_0:1)"></rect>
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
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '../../components/ContactForm.vue'
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
    posts: []
  }),
  async fetch() {
    const res = await fetch("/data/blog.json")
    this.posts = await res.json()
  },
  fetchOnServer: false,
  name: "IndexPage",
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
  },
  components: { ContactForm }
}
</script>