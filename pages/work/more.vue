<template>
    <div>
        <HomePortfolioMore />
    </div>
</template>

<script>

export default {
    name: "MoreWork",
    layout: "blogSingle",
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
