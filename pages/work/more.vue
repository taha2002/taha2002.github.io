<template>
    <div>
        <HomePortfolioMore />
    </div>
</template>

<script>

export default {
    name: "MoreWork",
    layout: "blogSingle",
    mounted: function () {
        window.taha = this
        this.$watch(
            function () {
                console.log('a thing changed', document.querySelector('body').className)
                return document.querySelector('body').className
            },
            function (newValue, oldValue) {
                console.log('a thing changed §§§§§§§§§§§§§§§§§§§')
                alert('First name changed from ' + oldValue + ' to ' + newValue + '!');
            }
        )
    },
    // mounted: () => {
    //     this.$watch(
    //         function () {
    //             window.taha = this.$el.lastChild
    //             return this.$el.lastChild
    //         },
    //         function (oldVal, newVal) {
    //             console.log(oldVal, ' - ', newVal)
    //             return ''
    //         }
    //     )
    // },
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
    computed: {
        name() {

            console.log('hiiiiiiiiiii')
            return 'this.userInfo.name';
        }
    }
    // ,
    // watch: {
    //     name(newVal, oldVal) {
    //         alert(newVal);
    //         alert(oldVal);
    //     }
    // }
}
</script>

<style>
.nav-links a {
    color: #4c4f65 
}

#my-svg path {
    fill: #4c4f65 ; 
}

</style>

