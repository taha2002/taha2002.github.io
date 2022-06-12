<template>
    <div>
        <div>

            <div id="single-work" itemscope itemtype="http://schema.org/CreativeWork" class="cerasa">
                <header v-bind:style="{ 'background-image': 'url(' + img + ')' }" id="top" class="hero-single-work">
                    <div class="hero-single-work-content">
                        <div class="text-loading-mask">
                            <div class="text-loading-overlay"></div>
                            <h1 itemprop="name" class="hero-single-work-title">{{ title }}</h1>
                        </div>
                        <div class="text-loading-mask">
                            <div style="transition-delay: 0.1s;" class="text-loading-overlay"></div>
                            <h3 v-if="body.company" class="hero-single-work-subtitle">with {{ body.company }}</h3>
                        </div>
                    </div>
                    <div class="hero-single-context-stripe">
                        <div class="content">
                            <ul class="context-stripe-focus-area" style="display: flex; justify-content: center;">
                                <li v-if="body.role"><strong>Role</strong> <span class="stripe-baffle">{{ body.role
                                }}</span></li>
                                <li v-if="body.context"><strong>Context</strong> <span class="stripe-baffle">{{
                                        body.context
                                }}</span></li>
                                <li v-if="body.period"><strong>Period</strong> <span class="stripe-baffle">{{
                                        body.period
                                }}</span></li>
                            </ul>
                        </div>
                    </div>

                </header>
                <main class="single-work">
                    <section class="single-work-intro-section">
                        <div class="single-work-giga-text">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="256" height="256"
                                viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
                                <g xmlns="http://www.w3.org/2000/svg"
                                    transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" stroke="none"
                                    fill="#4c4f65">
                                    <path
                                        d="M691 4880 c-119 -43 -220 -135 -275 -250 -29 -62 -31 -72 -34 -205 l-3 -140 155 -142 155 -143 1318 0 c1152 0 1326 -2 1378 -15 181 -48 332 -199 380 -380 61 -235 -59 -495 -276 -598 -109 -51 -151 -57 -439 -57 l-260 0 0 -449 0 -449 288 -4 c329 -4 348 -8 476 -95 271 -185 304 -564 70 -800 -68 -67 -170 -123 -262 -142 -31 -6 -163 -11 -312 -11 l-260 0 0 -451 0 -451 333 4 c316 4 337 6 437 31 293 72 505 189 706 391 272 272 414 613 414 990 0 343 -104 642 -313 903 l-68 85 49 56 c158 182 275 439 317 691 21 126 16 391 -10 511 -62 284 -189 516 -394 720 -171 170 -338 275 -550 344 -228 75 -122 71 -1621 73 -1309 2 -1346 2 -1399 -17z m275 -851 c15 -26 -6 -15 -37 18 l-34 36 32 -22 c18 -12 35 -27 39 -32z">
                                    </path>
                                    <path
                                        d="M380 4131 l0 -131 121 0 122 0 -44 48 c-23 26 -78 85 -121 131 l-78 84 0 -132z">
                                    </path>
                                    <path
                                        d="M1670 3347 l0 -433 393 -361 c215 -198 418 -384 450 -413 l57 -52 0 135 0 135 -211 228 c-253 274 -279 303 -214 243 28 -25 134 -123 238 -218 l187 -173 0 671 0 671 -450 0 -450 0 0 -433z">
                                    </path>
                                    <path
                                        d="M1670 2676 l1 -201 447 -419 447 -418 3 136 3 136 -382 413 c-211 226 -413 444 -451 483 l-68 72 0 -202z">
                                    </path>
                                    <path
                                        d="M1672 2175 l3 -189 420 -388 c231 -214 432 -397 448 -409 l27 -20 -1 123 0 123 -435 460 c-239 253 -441 467 -450 475 -13 13 -14 -7 -12 -175z">
                                    </path>
                                    <path
                                        d="M1670 1731 l0 -140 378 -348 c207 -191 380 -352 384 -358 13 -17 9 -59 -8 -83 -15 -21 -47 -28 -78 -16 -12 5 -205 209 -633 673 l-42 46 0 -115 0 -115 184 -168 c102 -92 185 -174 185 -182 0 -8 -9 -19 -21 -25 -23 -13 -42 4 -247 225 l-102 110 2 -405 3 -405 34 -70 c45 -91 124 -171 216 -216 l69 -34 288 -3 288 -3 0 405 0 405 -446 480 c-245 265 -447 481 -450 481 -2 0 -4 -63 -4 -139z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="content" v-if="body.longDescription">
                            <h2 class="single-work-intro-title"><span data-letters="The Project">The Project</span></h2>
                            <div class="single-work-intro-text single-work-anim-text">
                                <p itemprop="description">{{ body.longDescription }}</p>
                            </div>
                            <div class="button-content single-work-anim-text">
                                <a v-if="body.projectLink" :href="body.projectLink" target="_blank" rel="noopener"
                                    class="the-button ghost no-smoothState">
                                    <span class="button-text">Visit Website
                                    </span>
                                    <span class="button-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                            <path
                                                d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                    <div class="single-work-ui">
                        <div class="content">
                            <div class="section-text-mask">
                                <h4 class="h5 section-subtitle">UI &amp; Components.</h4>
                            </div>
                            <div class="section-text-mask">
                                <h2 class="h3 section-title">Design</h2>
                            </div>

                            <div class="inner-container single-work-ui-row single-work-anim-text">

                                <Slider v-if="!loading" :images="images" />

                            </div>

                        </div>
                    </div>
                    <section class="single-work-section">
                        <div class="section-mask"></div>
                        <div class="content">
                            <div class="section-text-mask">
                                <h4 class="h5 section-subtitle">Language & Technology used</h4>
                            </div>

                            <div class="skills">
                                <p class="about-me-text"></p>
                                <ul class="about-me-list">
                                    <li v-for="(skill, index) in skills" :key="index" style="padding: 12px;">
                                        <div class="about-me-list-label">{{ skill }}</div>
                                        <!-- <svg viewBox="0 0 128 128">
                                    <path
                                        d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z">
                                    </path>
                                </svg> -->
                                        <img v-bind:src="'/icons/' + skill + '.svg'" />
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>
                    <section class="section mobile-only">
                        <div class="section-mask"></div>
                        <div class="content">
                            <div class="button-content text-center"><button
                                    class="the-button button-big open-contact">Contact me</button></div>
                        </div>
                    </section>
                    <NuxtLink :to="'/work/' + next_post.slug" class="next-work">
                        <div class="content">
                            <h5 class="h5 next-work-lead">Next Project</h5>
                            <h4 class="h2 next-work-title">{{ next_post.title }}</h4>
                            <div class="next-work-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                    <path
                                        d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </NuxtLink>
                </main>
            </div>
            <ContactForm />
        </div>
    </div>
</template>
<script>
export default {
    created() {
        console.log('created')

    },
    mounted() {
        console.log('mounted')
        // this.$fetch()
        setTimeout(() => {
            AnimationManager.startLoadAnimation()
        }, 500);
    },
    activated() {
        // Call fetch again if last fetch more than 30 sec ago


    },
    methods: {
        loadingdone() {
            console.log('loadingg button')
            this.loading = false
        }
    },
    data() {
        var title = ""
        var slug = ""
        var img = ""
        var images = []
        var skills = []
        var body = []
        var loading = true
        var next_post = []
        console.log('this', this.$data)
        return {
            title: title,
            slug: slug,
            img: img,
            images: images,
            skills: skills,
            body: body,
            loading: loading,
            next_post: next_post
        }
    },
    layout: 'blogSingle',

    async fetch() {
        const res = await fetch('/data/portfolio.json')
        const posts = await res.json()

        var post_index = ''
        console.log(this.$route.params.slug);
        var filteredMountain = posts.find(
            (el, index) => {
                if (el.slug === this.$route.params.slug) {
                    post_index = index
                    return el
                }
            }
        )
        console.log('posts', posts)
        console.log('filteredMountain', filteredMountain)

        if (filteredMountain) {
            this.slug = filteredMountain.continent
            this.title = filteredMountain.title
            this.body = filteredMountain.body
            this.img = filteredMountain.img
            this.images = filteredMountain.body.images
            this.skills = filteredMountain.skills
        } else {
            this.$router.push('/')
        }
        if (posts.length === post_index + 1) {

            this.next_post = posts[0]
        } else {
            this.next_post = posts[post_index + 1]
        }

        this.loading = false

    },

    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: 'site-sidebar',
    // alternatively, for more control, a function can be passed with access to the component instance
    // It will be called in `created` and must not depend on fetched data
    fetchKey(getCounter) {
        // getCounter is a method that can be called to get the next number in a sequence
        // as part of generating a unique fetchKey.
        return this.someOtherData + getCounter('sidebar')
    }
}
</script>
