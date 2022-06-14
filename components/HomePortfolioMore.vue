<template>
    <section id="services">
        <div class="a9">
            <div class="a1p[120px] a1q[90px] a2r a1s[#E9ECF8]">
                <div class="a6 a1t aa[-16px]">
                    <div class="a5 ad">
                        <div class="aB[600px] a21 a22 a3g[70px]">

                            <h2 class="h3 section-title">Other Projects</h2>


                        </div>
                    </div>
                </div>
                <div class="a6 a1t aa[-16px]">
                    <div v-for="(post, index) in posts" :key="index" class="a5 md:a2i/2 xl:a2i/4 ad">
                        <div class=" more-project-content az aG hover:a1h a3h   a2R ac a20 a1w a22 a3j a1E ">

                            <div class="more-project-head">
                                <div class="folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" role="img"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">
                                        <title>Folder</title>
                                        <path
                                            d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="project-links">
                                    <a v-if="post.github" :href="post.github" style="margin-right: 12px;"
                                        aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" role="img"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-github">
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                    <a v-if="post.link" :href="post.link" class="external" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" role="img"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-external-link">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3 style="margin-top: 20px;"
                                class=" a1f aI a1V sm:a1U lg:a1V 2xl:a1U  group-hover:a1g a28 ">
                                {{ post.title }}
                            </h3>
                            <p class=" a1J a1K group-hover:a1g a1R a1a ">
                                {{ post.description }}
                            </p>
                            <p class=" more-project-skills a1J a1K group-hover:a1g  a1R a1a ">
                                {{ skills(post.skills) }}
                            </p>
                            <div>
                                <span class="a1 a2 aZ a25">
                                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5"></circle>
                                        <circle opacity="0.08" cx="210" cy="6" r="62"></circle>
                                    </svg>
                                </span>
                                <span class="a1 a3m a3n a25">
                                    <svg width="23" height="32" viewBox="0 0 23 32" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="21.262" cy="1.12081" r="1.12081"
                                            transform="rotate(90 21.262 1.12081)">
                                        </circle>
                                        <circle cx="21.262" cy="30.4863" r="1.12081"
                                            transform="rotate(90 21.262 30.4863)">
                                        </circle>
                                        <circle cx="1.76005" cy="1.12081" r="1.12081"
                                            transform="rotate(90 1.76005 1.12081)">
                                        </circle>
                                        <circle cx="1.76005" cy="30.4863" r="1.12081"
                                            transform="rotate(90 1.76005 30.4863)">
                                        </circle>
                                        <circle cx="11.6228" cy="1.12081" r="1.12081"
                                            transform="rotate(90 11.6228 1.12081)">
                                        </circle>
                                        <circle cx="11.6228" cy="30.4863" r="1.12081"
                                            transform="rotate(90 11.6228 30.4863)">
                                        </circle>
                                        <circle cx="21.262" cy="10.9839" r="1.12081"
                                            transform="rotate(90 21.262 10.9839)">
                                        </circle>
                                        <circle cx="1.76005" cy="10.9839" r="1.12081"
                                            transform="rotate(90 1.76005 10.9839)">
                                        </circle>
                                        <circle cx="11.6228" cy="10.9839" r="1.12081"
                                            transform="rotate(90 11.6228 10.9839)">
                                        </circle>
                                        <circle cx="21.262" cy="20.8469" r="1.12081"
                                            transform="rotate(90 21.262 20.8469)">
                                        </circle>
                                        <circle cx="1.76005" cy="20.8469" r="1.12081"
                                            transform="rotate(90 1.76005 20.8469)">
                                        </circle>
                                        <circle cx="11.6228" cy="20.8469" r="1.12081"
                                            transform="rotate(90 11.6228 20.8469)">
                                        </circle>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    data: () => ({
        posts: []
    }),

    async fetch() {
        const res = await fetch('/data/portfolio-more.json')
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
    },
    methods: {
        skills(skills) {
            console.log('skills', skills)
            var text = ''
            for (let i = 0; i < (skills.length - 1); i++) {
                console.log('skills')
                text += skills[i] + ' ,'
            }
            text += skills[skills.length - 1]
            return text

        }
    }
}
</script>


<style>
.more-project,
.more-project-content {
    height: 300px;
    fill: #f06449;
    color: #f06449;
}

.more-project-content p {

    color: #1c1d25;
}

.more-project-content:hover {
    fill: #fff !important;
    color: #fff;
}

.more-project-skills {
    position: absolute;
    bottom: 18px;
}

.more-project-content {
    padding: 22px;
}

.more-project-head {
    display: flex;
    justify-content: space-between;
    /* color: #f06449; */
}


.project-links {
    display: flex;
    padding: 10px;
}
</style>