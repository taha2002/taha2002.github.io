<template>
    <div>

        <HomeHero />
        <HomeAbout />
        <HomeResume />

        <div class="some-shapes">
            <div data-rellax-speed="-1" class="circle1 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                    height="70" viewbox="0 0 70 70">
                    <circle fill="none" stroke="#6107EF" stroke-width="9" stroke-miterlimit="10" cx="35" cy="35.1"
                        r="28.5"></circle>
                </svg></div>
            <div data-rellax-speed="1" class="square1 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="100"
                    height="100" viewbox="0 0 100 100">
                    <path fill="#A79FFF" d="M88 12v76H12V12h76m9-9H3v94h94V3z"></path>
                </svg></div>
            <div data-rellax-speed="1" class="triangle1 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                    height="70" viewbox="0 0 70 70">
                    <path fill="none" stroke="#0FE851" stroke-width="8" stroke-miterlimit="10"
                        d="M12.6 56l22.8-39.5L58.2 56z"></path>
                </svg></div>
            <div data-rellax-speed="-1" class="cross1 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="180"
                    height="180" viewbox="26 -26 180 180">
                    <path fill="#ffda77" d="M183.208 103.01l-28.143 28.144L49 25.09 77.143-3.055z"></path>
                    <path fill="#ffda77" d="M183.208 25.09L77.143 131.153 49 103.01 155.065-3.053z"></path>
                </svg></div>
            <div data-rellax-speed="-1.3" class="circle2 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                    height="70" viewbox="0 0 70 70">
                    <circle fill="none" stroke="#6107EF" stroke-width="9" stroke-miterlimit="10" cx="35" cy="35.1"
                        r="28.5"></circle>
                </svg></div>
            <div data-rellax-speed="-1" class="square2 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="100"
                    height="100" viewbox="0 0 100 100">
                    <path fill="#A79FFF" d="M88 12v76H12V12h76m9-9H3v94h94V3z"></path>
                </svg></div>
            <div data-rellax-speed="1" class="triangle2 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                    height="70" viewbox="0 0 70 70">
                    <path fill="none" stroke="#0FE851" stroke-width="8" stroke-miterlimit="10"
                        d="M12.6 56l22.8-39.5L58.2 56z"></path>
                </svg></div>
            <div data-rellax-speed="1" class="cross2 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="180"
                    height="180" viewbox="26 -26 180 180">
                    <path fill="#ffda77" d="M183.208 103.01l-28.143 28.144L49 25.09 77.143-3.055z"></path>
                    <path fill="#ffda77" d="M183.208 25.09L77.143 131.153 49 103.01 155.065-3.053z"></path>
                </svg></div>
            <div data-rellax-speed="-1" class="square3 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="100"
                    height="100" viewbox="0 0 100 100">
                    <path fill="#A79FFF" d="M88 12v76H12V12h76m9-9H3v94h94V3z"></path>
                </svg></div>
            <div data-rellax-speed="1.3" class="circle3 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="70"
                    height="70" viewbox="0 0 70 70">
                    <circle fill="none" stroke="#6107EF" stroke-width="9" stroke-miterlimit="10" cx="35" cy="35.1"
                        r="28.5"></circle>
                </svg></div>
            <div data-rellax-speed="-1" class="cross3 rellax"><svg xmlns="http://www.w3.org/2000/svg" width="180"
                    height="180" viewbox="26 -26 180 180">
                    <path fill="#ffda77" d="M183.208 103.01l-28.143 28.144L49 25.09 77.143-3.055z"></path>
                    <path fill="#ffda77" d="M183.208 25.09L77.143 131.153 49 103.01 155.065-3.053z"></path>
                </svg></div>
        </div>

        <HomePortfolio />

        <section class="section mobile-only">
            <div class="section-mask"></div>
            <div class="content">
                <div class="button-content text-center"><button class="the-button button-big open-contact">Contact
                        me</button></div>
            </div>
        </section>
        <HomeBlog />
        <ContactForm />


    </div>
</template>

<script>

export default {
    layout: 'home',
    head: {
        link: [
            {
                rel: "stylesheet",
                href: "/css/ptailwind.css"
            }
        ]
    }
}

// export default {
//     head: {
//         link: [
//             {
//                 rel: "stylesheet",
//                 href:
//                     "/css/loader.css"
//             },
//             {
//                 rel: "stylesheet",
//                 href:
//                     "/css/application.css"
//             },
//             {
//                 rel: "preconnect",
//                 href: "https://fonts.googleapis.com"
//             },
//             {
//                 rel: "preconnect",
//                 href: "https://fonts.gstatic.com"
//             },
//             {
//                 rel: "stylesheet",
//                 href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
//             }
//         ],
//         script: [
//             {
//                 src: "/js/jquery.min.js"
//             },
//             {
//                 src: "/js/application.js",
//                 async: true,
//                 crossorigin: "anonymous"
//             },
//         ]
//     }
//     // other config goes here
// }
</script>
