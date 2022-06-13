<template>
  <div>
    <nav itemscope itemtype="http://schema.org/SiteNavigationElement" class="main-navigation">
      <div class="content nav-content">
        <NuxtLink to="/" data-destination="home" itemprop="url" class="nav-logo">
          <svg xmlns="http://www.w3.org/2000/svg" id="my-svg" version="1.0" width="256" height="256"
            viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
            <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
              stroke="none" fill="#FFF">
              <path
                d="M691 4880 c-119 -43 -220 -135 -275 -250 -29 -62 -31 -72 -34 -205 l-3 -140 155 -142 155 -143 1318 0 c1152 0 1326 -2 1378 -15 181 -48 332 -199 380 -380 61 -235 -59 -495 -276 -598 -109 -51 -151 -57 -439 -57 l-260 0 0 -449 0 -449 288 -4 c329 -4 348 -8 476 -95 271 -185 304 -564 70 -800 -68 -67 -170 -123 -262 -142 -31 -6 -163 -11 -312 -11 l-260 0 0 -451 0 -451 333 4 c316 4 337 6 437 31 293 72 505 189 706 391 272 272 414 613 414 990 0 343 -104 642 -313 903 l-68 85 49 56 c158 182 275 439 317 691 21 126 16 391 -10 511 -62 284 -189 516 -394 720 -171 170 -338 275 -550 344 -228 75 -122 71 -1621 73 -1309 2 -1346 2 -1399 -17z m275 -851 c15 -26 -6 -15 -37 18 l-34 36 32 -22 c18 -12 35 -27 39 -32z" />
              <path d="M380 4131 l0 -131 121 0 122 0 -44 48 c-23 26 -78 85 -121 131 l-78 84 0 -132z" />
              <path
                d="M1670 3347 l0 -433 393 -361 c215 -198 418 -384 450 -413 l57 -52 0 135 0 135 -211 228 c-253 274 -279 303 -214 243 28 -25 134 -123 238 -218 l187 -173 0 671 0 671 -450 0 -450 0 0 -433z" />
              <path
                d="M1670 2676 l1 -201 447 -419 447 -418 3 136 3 136 -382 413 c-211 226 -413 444 -451 483 l-68 72 0 -202z" />
              <path
                d="M1672 2175 l3 -189 420 -388 c231 -214 432 -397 448 -409 l27 -20 -1 123 0 123 -435 460 c-239 253 -441 467 -450 475 -13 13 -14 -7 -12 -175z" />
              <path
                d="M1670 1731 l0 -140 378 -348 c207 -191 380 -352 384 -358 13 -17 9 -59 -8 -83 -15 -21 -47 -28 -78 -16 -12 5 -205 209 -633 673 l-42 46 0 -115 0 -115 184 -168 c102 -92 185 -174 185 -182 0 -8 -9 -19 -21 -25 -23 -13 -42 4 -247 225 l-102 110 2 -405 3 -405 34 -70 c45 -91 124 -171 216 -216 l69 -34 288 -3 288 -3 0 405 0 405 -446 480 c-245 265 -447 481 -450 481 -2 0 -4 -63 -4 -139z" />
            </g>
          </svg>
          <span itemprop="name" class="visual-hide">.home()</span><span aria-label="Taha Bouras's Logo">Taha
            Bouras's Logo</span>
        </NuxtLink>
        <div aria-label="Mobile Menu" class="nav-toggle"><span class="menu-trigger"><i
              class="menu-trigger-bar top"></i><i class="menu-trigger-bar middle"></i><i
              class="menu-trigger-bar bottom"></i></span></div>
        <ul class="nav-links">
          <li>
            <NuxtLink to="/" data-destination="home">.home()</NuxtLink>
          </li>
          <li itemprop="name">
            <NuxtLink to="/#about" data-scroll itemprop="url" class="">.about()</NuxtLink>
          </li>
          <li itemprop="name">
            <NuxtLink to="/#portfolio" data-scroll itemprop="url" class="">.portfolio()</NuxtLink>
          </li>
          <li itemprop="name">
            <NuxtLink to="/blog" data-scroll itemprop="url" class="">.blog()</NuxtLink>
          </li>

          <li><a href="#" class=" open-contact">.contact()</a></li>

        </ul>
      </div>
    </nav>
    <nav class="mobile-menu"><span aria-label="Close" class="close-trigger"><i class="close-trigger-bar left"></i><i
          class="close-trigger-bar right"></i></span>
      <ul class="mobile-nav-links">
        <li>
          <NuxtLink to="/" data-destination="home">.home()</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#about" data-scroll class="">.about()</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#portfolio" data-scroll class="">.portfolio()</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" data-scroll class="">.blog()</NuxtLink>
        </li>
        <li>
          <a href="#" class=" open-contact">.contact()</a>
        </li>
      </ul>
      <ul class="nav-social-stripe">

        <li>
          <a href="https://www.linkedin.com/in/taha-bouras/" target="_blank" rel="noopener" aria-label="Linkedin">
            <img style="height: 23px; width: 23px;" src="/icons/linkdin-white.svg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/taha2002" target="_blank" rel="noopener" aria-label="Github">
            <img style="height: 23px; width: 23px;" src="/icons/github-white.svg" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100007522123943" target="_blank" rel="noopener"
            aria-label="Facebook">
            <img style="height: 23px; width: 23px;" src="/icons/facebook-white.svg" />
          </a>
        </li>
        <li>
          <a href="mailto:tahadevbou@gmail.com" target="_blank" rel="noopener" aria-label="Email">
            <img style="height: 23px; width: 23px;" src="/icons/email-white.svg" />
          </a>
        </li>
      </ul>
    </nav>

    <!-- <nav class="flex align-center gap-4 p-4">
      <NuxtLink to="/">
        home
      </NuxtLink>
      <NuxtLink to="/blog">
        blog
      </NuxtLink>
      <NuxtLink to="/about">
        about
      </NuxtLink>
      <NuxtLink to="/contact">
        contact
      </NuxtLink>
    </nav> -->
  </div>
</template>

<style>
.nuxt-logo {
  height: 180px;
}
</style>