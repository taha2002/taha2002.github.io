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
    var hash = this.$root._route.hash

    console.log('path', hash)

    hash = this.getsection(hash)

    window.addEventListener('load', (e) => {
      console.log('scroll smoth')
      if (hash) {
        const element = document.getElementById(hash);
        setTimeout(() => { element.scrollIntoView({ behavior: 'smooth' }) }, 2100);
        console.log('scroll smoth')
      }
    })

  },
  methods: {
    animationManager() {
      setTimeout(() => {
        Application.start()
        AnimationManager.startLoadAnimation()

      }, 1500);

      // document.onload = function () {        
      //   Application.start()
      // };
    },
    getsection(name, url) {
      if (!url) url = location.href;
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\#&]([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(url);
      return results == null ? null : results[1];
    }
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
