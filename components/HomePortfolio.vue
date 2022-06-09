<template>
    <section id="portfolio" itemscope="" itemprop="mainContentOfPage" class="case-studies-section">
        <div class="section-mask"></div>
        <div class="content">
            <div class="section-text-mask">
                <h4 class="h5 section-subtitle">Portfolio</h4>
            </div>
            <div class="section-text-mask">
                <h2 class="h3 section-title">Latest Works</h2>
            </div>
            <ul class="case-studies-list">
                <li v-for="(post, index) in posts" :key="index" itemtype="http://schema.org/CreativeWork" itemscope>
                    <NuxtLink :to="'/work/' + post.slug" id="cerasa"
                        v-bind:style="{ 'background-image': 'url(' + post.img + ')' }" data-destination="cerasa"
                        itemprop="url" class="case-study">
                        <div class="case-study-mask"></div>
                        <div class="case-study-reveal-mask"></div>
                        <div class="case-study-mask-number">
                            <div class="case-study-mask-back">0{{ index + 1 }}</div>
                            <div class="case-study-mask-front">
                                <div class="case-study-mask-overlay">0{{ index + 1 }}</div>
                            </div>
                        </div>
                        <div class="case-study-text-section">
                            <h3 itemprop="name" class="h2 case-study-title">{{ post.title }}</h3>
                            <h5 itemprop="description" class="case-study-subtitle">{{ post.description }}</h5>
                            <button class="the-button call-to-button">
                                <span class="button-text">View more</span>
                                <div class="button-mask"></div>
                                <span class="button-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                        <path
                                            d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </NuxtLink>
                </li>

            </ul>
        </div>
    </section>

</template>

<script>
export default {
    data: () => ({
        posts: []
    }),

    async fetch() {
        const res = await fetch('/data/portfolio.json')
        // this.$store.commit("modules/portfolio/SET_POSTS", res)

        const fetchedPosts = await res.json()
        console.log('posts', fetchedPosts)
        this.posts = fetchedPosts
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

