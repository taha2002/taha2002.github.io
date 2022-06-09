<template>
  <div>
    <div id="loader">
      <div class="loader-content">
        <div class="stripe-loader">
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
      </div>
    </div>
    <div id="loader-after"></div>
    <div id="page-transition">
      <div class="page-transition-content">
        <div class="stripe-loader">
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
      </div>
    </div>
    <div id="page-transition-after"></div>
  </div>
</template>


<script>
export default {
  created() {
    console.log('created')

  },
  mounted() {
    console.log('mounted')
    this.animationManager()

  },
  methods: {
    animationManager() {
      setTimeout(() => {
        AnimationManager.startLoadAnimation()
      }, 1500);

      document.onload = function () {        
        Application.start()
      };
    },
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "/css/loader.css"
      },
      {
        rel: "stylesheet",
        href:
          "/css/application.css"
      }
    ],
    script: [
      {
        src: "/js/application.js",
        async: true,
        crossorigin: "anonymous"
      },
    ]
  }

}
</script>
