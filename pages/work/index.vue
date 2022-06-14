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
                PORTFOLIO
              </h1>
              <p class="
                  a1J
                  aH
                  a1K
                  a1R
                ">
                I'm happy to see u here.
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
                  Portfolio
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
    <HomePortfolio />
    <HomePortfolioMore />
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
    // const res = await fetch('http://localhost:3000/data/portfolio.json')
    // this.$store.commit("modules/portfolio/SET_POSTS", res)
  },
  mounted() {
    console.log("mounted");
  },
  name: "ProjectPage",
  layout: "blog",
  // layout: 'portfolio',
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



