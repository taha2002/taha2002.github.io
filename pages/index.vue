<template>
    <div>

        <HomeHero />

        <section id="about">
            <div class="single-work-section">
                <div class="section-mask"></div>
                <div class="content">
                    <div class="giga-text-main">About</div>
                    <div class="section-text-mask">
                        <h4 class="h5 section-subtitle">about</h4>
                    </div>
                    <div class="section-text-mask">
                        <h2 class="h3 section-title">About Me</h2>
                    </div>
                    <div class="inner-container">
                        <div class="is-left single-work-first-anim-blocks">
                            <div class="single-work-content-desc aboutme">
                                <p>I'm Taha Bouras, a 22-year-old Italian <strong>Freelance
                                        Back-end developer</strong>. I'm a weird guy who likes making weird things
                                    with
                                    web technologies. <br>I like to <strong>resolve</strong> design problems,
                                    <strong>create</strong> smart user interface and <strong>imagine</strong> useful
                                    interaction, developing rich web experiences &amp; <strong>web
                                        applications</strong>.
                                    <br>
                                    When not working or futzing around with code, I study how to escape from University.
                                    Actually <strong>for hire</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="content">
                        <div class="section-text-mask">
                            <h2 class="h3" style="text-align: center; margin-top: 30px; color: #4a4a4a;">My Skills</h2>
                        </div>
                        <div class="skills">
                            <p class="about-me-text"></p>
                            <ul class="about-me-list">
                                <li class="react">
                                    <div class="about-me-list-label">React.js</div><svg viewBox="0 0 128 128">
                                        <path
                                            d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z">
                                        </path>
                                    </svg>
                                </li>
                                <li class="uiux">
                                    <div class="about-me-list-label">UI/UX</div><svg xmlns="http://www.w3.org/2000/svg"
                                        width="128" height="128" viewBox="0 0 128 128">
                                        <path
                                            d="M74.6 96.7c1 0 1.9-.8 1.9-1.9s-.9-1.8-1.9-1.8H50.4c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9h24.2zM83.9 100.4H41.1c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9H84c1 0 1.9-.8 1.9-1.9s-.9-1.9-2-1.9zM20.6 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zM37.3 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S39.4 24 37.3 24zM54.1 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S56.2 24 54.1 24z">
                                        </path>
                                        <path
                                            d="M7.5 7.2V119h111.8V7.2H7.5zm3.7 3.8h104.4v18.6H11.2V11zm104.4 104.3H11.2v-82h104.4v82z">
                                        </path>
                                        <path
                                            d="M47.5 81.4l1.7 1.4c.1 0 .1.1.2.1.4.3.7.5 1.1.7.2.1.5.3.7.4.4.2.7.4 1.1.6.3.2.6.3.9.5.3.1.6.3.9.4.6.3 1.3.5 1.9.7.2.1.5.1.7.2.5.1 1 .3 1.5.4.3.1.5.1.8.2.5.1 1 .2 1.5.2.2 0 .5.1.7.1.7.1 1.5.1 2.2.1s1.5 0 2.2-.1c.2 0 .5-.1.7-.1.5-.1 1-.1 1.5-.2.3 0 .5-.1.8-.1.5-.1 1-.2 1.5-.4.2-.1.4-.1.7-.2.6-.2 1.3-.4 1.9-.7.3-.1.6-.3.9-.4.3-.2.7-.3 1-.5.4-.2.7-.4 1-.6.2-.1.5-.3.7-.4.4-.2.7-.5 1.1-.7.1 0 .1-.1.2-.1l1.9-1.4-.1-.1c5.1-4.4 8.3-10.9 8.3-18.2C87.7 49.8 76.8 39 63.5 39S39.2 49.8 39.2 63.1c0 7.3 3.2 13.8 8.3 18.3zM58.4 83c-.7-.2-1.5-.4-2.2-.7-.1 0-.2-.1-.2-.1-.7-.3-1.5-.6-2.2-1l4.5-2.5c1.4-.8 2.3-2.2 2.3-3.8v-3.1l-.4-.5s-1.5-1.8-2.1-4.3l-.2-.9-.6-.4.1-2.8.6-.6v-4.9c0-.1-.1-1.4.8-2.5.9-1 2.5-1.5 4.8-1.5s3.9.5 4.8 1.5c1 1.1.8 2.4.8 2.5v4.1l.1.9.6.6v2.7c0 .1-.1.1-.1.1l-.9.3-.3.9c-.4 1.3-1 2.5-1.8 3.5-.2.2-.3.5-.5.6l-.5.5V75c0 1.6.9 3.1 2.4 3.9l4.8 2.4h-.1c-.7.3-1.3.6-2 .9-.1 0-.2.1-.3.1-.7.3-1.4.5-2.2.7-3.4.8-6.7.8-10 0 .1 0 0 0 0 0zm5-40.4c11.3 0 20.5 9.2 20.5 20.5 0 6.4-2.9 12.1-7.5 15.8-.1-.1-.2-.1-.3-.2l-6.5-3.2c-.2-.1-.3-.3-.3-.5v-1.9c.1-.1.2-.2.3-.4.8-1.1 1.5-2.4 2-3.8 1.1-.7 1.8-1.9 1.8-3.3v-2.7c0-.8-.2-1.5-.7-2.2v-3.1c.1-.7.1-3.1-1.7-5.2-1.6-1.8-4.2-2.8-7.6-2.8s-6 .9-7.6 2.8C54 54.5 54 57 54.1 57.6v3.1c-.4.6-.7 1.4-.7 2.2v2.7c0 1 .4 2 1.1 2.7.6 2.1 1.6 3.8 2.2 4.6V75c0 .2-.1.4-.3.5l-6 3.3c-.1 0-.1.1-.2.1-4.5-3.8-7.4-9.4-7.4-15.8.1-11.3 9.3-20.5 20.6-20.5z">
                                        </path>
                                    </svg>
                                </li>
                                <li class="css-code">
                                    <div class="about-me-list-label">is Fun.</div><svg
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path fill="#444"
                                            d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z">
                                        </path>
                                    </svg>
                                </li>
                                <li class="uiux">
                                    <div class="about-me-list-label">UI/UX</div><svg xmlns="http://www.w3.org/2000/svg"
                                        width="128" height="128" viewBox="0 0 128 128">
                                        <path
                                            d="M74.6 96.7c1 0 1.9-.8 1.9-1.9s-.9-1.8-1.9-1.8H50.4c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9h24.2zM83.9 100.4H41.1c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9H84c1 0 1.9-.8 1.9-1.9s-.9-1.9-2-1.9zM20.6 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zM37.3 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S39.4 24 37.3 24zM54.1 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S56.2 24 54.1 24z">
                                        </path>
                                        <path
                                            d="M7.5 7.2V119h111.8V7.2H7.5zm3.7 3.8h104.4v18.6H11.2V11zm104.4 104.3H11.2v-82h104.4v82z">
                                        </path>
                                        <path
                                            d="M47.5 81.4l1.7 1.4c.1 0 .1.1.2.1.4.3.7.5 1.1.7.2.1.5.3.7.4.4.2.7.4 1.1.6.3.2.6.3.9.5.3.1.6.3.9.4.6.3 1.3.5 1.9.7.2.1.5.1.7.2.5.1 1 .3 1.5.4.3.1.5.1.8.2.5.1 1 .2 1.5.2.2 0 .5.1.7.1.7.1 1.5.1 2.2.1s1.5 0 2.2-.1c.2 0 .5-.1.7-.1.5-.1 1-.1 1.5-.2.3 0 .5-.1.8-.1.5-.1 1-.2 1.5-.4.2-.1.4-.1.7-.2.6-.2 1.3-.4 1.9-.7.3-.1.6-.3.9-.4.3-.2.7-.3 1-.5.4-.2.7-.4 1-.6.2-.1.5-.3.7-.4.4-.2.7-.5 1.1-.7.1 0 .1-.1.2-.1l1.9-1.4-.1-.1c5.1-4.4 8.3-10.9 8.3-18.2C87.7 49.8 76.8 39 63.5 39S39.2 49.8 39.2 63.1c0 7.3 3.2 13.8 8.3 18.3zM58.4 83c-.7-.2-1.5-.4-2.2-.7-.1 0-.2-.1-.2-.1-.7-.3-1.5-.6-2.2-1l4.5-2.5c1.4-.8 2.3-2.2 2.3-3.8v-3.1l-.4-.5s-1.5-1.8-2.1-4.3l-.2-.9-.6-.4.1-2.8.6-.6v-4.9c0-.1-.1-1.4.8-2.5.9-1 2.5-1.5 4.8-1.5s3.9.5 4.8 1.5c1 1.1.8 2.4.8 2.5v4.1l.1.9.6.6v2.7c0 .1-.1.1-.1.1l-.9.3-.3.9c-.4 1.3-1 2.5-1.8 3.5-.2.2-.3.5-.5.6l-.5.5V75c0 1.6.9 3.1 2.4 3.9l4.8 2.4h-.1c-.7.3-1.3.6-2 .9-.1 0-.2.1-.3.1-.7.3-1.4.5-2.2.7-3.4.8-6.7.8-10 0 .1 0 0 0 0 0zm5-40.4c11.3 0 20.5 9.2 20.5 20.5 0 6.4-2.9 12.1-7.5 15.8-.1-.1-.2-.1-.3-.2l-6.5-3.2c-.2-.1-.3-.3-.3-.5v-1.9c.1-.1.2-.2.3-.4.8-1.1 1.5-2.4 2-3.8 1.1-.7 1.8-1.9 1.8-3.3v-2.7c0-.8-.2-1.5-.7-2.2v-3.1c.1-.7.1-3.1-1.7-5.2-1.6-1.8-4.2-2.8-7.6-2.8s-6 .9-7.6 2.8C54 54.5 54 57 54.1 57.6v3.1c-.4.6-.7 1.4-.7 2.2v2.7c0 1 .4 2 1.1 2.7.6 2.1 1.6 3.8 2.2 4.6V75c0 .2-.1.4-.3.5l-6 3.3c-.1 0-.1.1-.2.1-4.5-3.8-7.4-9.4-7.4-15.8.1-11.3 9.3-20.5 20.6-20.5z">
                                        </path>
                                    </svg>
                                </li>
                                <li class="fun">
                                    <div class="about-me-list-label">Semicolons.</div><svg
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path fill="#444"
                                            d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z">
                                        </path>
                                    </svg>
                                </li>
                                <li class="fun">
                                    <div class="about-me-list-label">Semicolons.</div><svg
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path fill="#444"
                                            d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z">
                                        </path>
                                    </svg>
                                </li>
                                <li class="fun">
                                    <div class="about-me-list-label">Semicolons.</div><svg
                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path fill="#444"
                                            d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z">
                                        </path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section id="education" class="a1p[120px] ac a20">
            <div class="a9">
                <div class="a1r a1s[#E9ECF8] a1q[70px]">
                    <div class="a6 a1t aa[-16px]">
                        <div class="a5 ad">
                            <div class="aB[600px] a21 a22 a3g[50px]">
                                <h4 class="h5 section-subtitle">Education &amp; Experience</h4>
                                <h2 class="h3">My Resume
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="ac a2q"><span class="
            a1 a2 ag a3H
            lg:a3n/2
            as[1px] a1y a3o[#d7dfff]
          "></span>
                        <div class="a6 a1t a2h">
                            <div class="a5 lg:a2i/2 ad">
                                <div class="
                lg:aB[428px]
                xl:aB[490px]
                a5 a3I a3J
                sm:a3K
                lg:aR lg:a1e lg:a1M lg:a2b
                ac a2g
              "><span class="
                  a1 ak a3
                  lg:a2C lg:a3L
                  a2j
                  a3M
                  a1i
                  az
                  a3N
                  a3f
                "></span>
                                    <h3 class="a1P a1V aI a1L">
                                        UI/UX Designer
                                    </h3>
                                    <p class="
                  a1P aH a1K a28
                " style="
    text-align: right;
">
                                        Google INC | New York
                                    </p> <span class="
                  aL
                  a7
                  a1u
                  aK
                  ad
                  a1i
                  a1h
                  a1g
                  a3O
                  a1P
                  a1H
                ">
                                        2011 - 2013
                                    </span>
                                    <p class="a1J aH a1K">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusm tempor incididunt ut labore et dolore magna
                                        aliqua Loremipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                            </div>
                            <div class="a5 lg:a2i/2 ad"></div>
                            <div class="a5 lg:a2i/2 ad"></div>
                            <div class="a5 lg:a2i/2 ad">
                                <div class="
                lg:aB[428px]
                xl:aB[490px]
                a5 a3J
                sm:a3K
                lg:aR lg:a3P
                ac a2g
              "><span class="
                  a1 ak a3
                  lg:a3Q
                  a2j
                  a3M
                  a1i
                  az
                  a3N
                  a3f
                "></span>
                                    <h3 class="a1P a1V aI a1L">
                                        Specialization Course
                                    </h3>
                                    <p class="
                  a1P aH a1K a28
                ">
                                        Stanford University | New York
                                    </p> <span class="
                  aL
                  a7
                  a1u
                  aK
                  ad
                  a1i
                  a1h
                  a1g
                  a3O
                  a1P
                  a1H
                ">
                                        2017 - 2018
                                    </span>
                                    <p class="a1J aH a1K">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusm tempor incididunt ut labore et dolore magna
                                        aliqua Loremipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                            </div>
                            <div class="a5 lg:a2i/2 ad">
                                <div class="
                lg:aB[428px]
                xl:aB[490px]
                a5 a3I a3J
                sm:a3K
                lg:aR lg:a1e lg:a1M lg:a2b
                ac a2g
              "><span class="
                  a1 ak a3
                  lg:a2C lg:a3L
                  a2j
                  a3M
                  a1i
                  az
                  a3N
                  a3f
                "></span>
                                    <h3 class="a1P a1V aI a1L">
                                        Web Designer
                                    </h3>
                                    <p class="
                  a1P aH a1K a28
                ">
                                        Facebook INC | New York
                                    </p> <span class="
                  aL
                  a7
                  a1u
                  aK
                  ad
                  a1i
                  a1h
                  a1g
                  a3O
                  a1P
                  a1H
                ">
                                        2014 - 2016
                                    </span>
                                    <p class="a1J aH a1K">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusm tempor incididunt ut labore et dolore magna
                                        aliqua Loremipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                            </div>
                            <div class="a5 lg:a2i/2 ad"></div>
                            <div class="a5 lg:a2i/2 ad"></div>
                            <div class="a5 lg:a2i/2 ad">
                                <div class="
                lg:aB[428px]
                xl:aB[490px]
                a5 a3J
                sm:a3K
                lg:aR lg:a3P
                ac a2g
              "><span class="
                  a1 ak a3
                  lg:a3Q
                  a2j
                  a3M
                  a1i
                  az
                  a3N
                  a3f
                "></span>
                                    <h3 class="a1P a1V aI a1L">
                                        Bachelor Degree
                                    </h3>
                                    <p class="
                  a1P aH a1K a28
                ">
                                        Stanford University | New York
                                    </p> <span class="
                  aL
                  a7
                  a1u
                  aK
                  ad
                  a1i
                  a1h
                  a1g
                  a3O
                  a1P
                  a1H
                ">
                                        2019 - 2021
                                    </span>
                                    <p class="a1J aH a1K">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusm tempor incididunt ut labore et dolore magna
                                        aliqua Loremipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><span class="a1 aZ a2 a3R"><svg width="455" height="1307" viewBox="0 0 455 1307" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="332.05" height="1060.35"
                            transform="matrix(-0.632736 -0.774367 -0.774367 0.632736 1031.2 139.128)"
                            fill="url(#paint0_linear_0:1)"></rect>
                        <rect opacity="0.08" width="509.849" height="1060.35"
                            transform="matrix(-0.632736 -0.774367 -0.774367 0.632736 1293.7 635.81)"
                            fill="url(#paint1_linear_0:1)"></rect>
                        <defs>
                            <linearGradient id="paint0_linear_0:1" x1="166.025" y1="0" x2="166.025" y2="1060.35"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4A6CF7"></stop>
                                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_0:1" x1="254.924" y1="0" x2="254.924" y2="1060.35"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4A6CF7"></stop>
                                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg></span> <span class="a1 a3 a24 a2D[-1]"><svg width="416" height="1453" viewBox="0 0 416 1453"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="332.05" height="1030.82"
                            transform="matrix(0.632736 0.774368 0.774368 -0.632736 -603 1507.24)"
                            fill="url(#paint0_linear_0:1)"></rect>
                        <rect opacity="0.08" width="791.583" height="1060.35"
                            transform="matrix(0.632736 0.774368 0.774368 -0.632736 -906.263 670.922)"
                            fill="url(#paint1_linear_0:1)"></rect>
                        <defs>
                            <linearGradient id="paint0_linear_0:1" x1="166.025" y1="0" x2="166.025" y2="1030.82"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4A6CF7"></stop>
                                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_0:1" x1="395.791" y1="0" x2="395.791" y2="1060.35"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4A6CF7"></stop>
                                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>
        </section>

        <main>
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
            <section id="case-studies" itemscope="" itemprop="mainContentOfPage" class="case-studies-section">
                <div class="section-mask"></div>
                <div class="content">
                    <div class="section-text-mask">
                        <h4 class="h5 section-subtitle">Case Studies</h4>
                    </div>
                    <div class="section-text-mask">
                        <h2 class="h3 section-title">Latest Works</h2>
                    </div>
                    <ul class="case-studies-list">
                        <li itemscope itemtype="http://schema.org/CreativeWork"><a href="cerasa.html" id="cerasa"
                                style="background-image: url('/img/cerasa-work.jpg');" data-destination="cerasa"
                                itemprop="url" class="case-study">
                                <div class="case-study-mask"></div>
                                <div class="case-study-reveal-mask"></div>
                                <div class="case-study-mask-number">
                                    <div class="case-study-mask-back">01</div>
                                    <div class="case-study-mask-front">
                                        <div data-index="01" class="case-study-mask-overlay">01</div>
                                    </div>
                                </div>
                                <div class="case-study-text-section">
                                    <h3 itemprop="name" class="h2 case-study-title">Cerasa Redesign</h3>
                                    <h5 itemprop="description" class="case-study-subtitle">Leader in bathroom
                                        furniture
                                        since 1983.</h5><button class="the-button call-to-button"><span
                                            class="button-text">Case Study</span>
                                        <div class="button-mask"></div><span class="button-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                                <path
                                                    d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                                </path>
                                            </svg></span>
                                    </button>
                                </div>
                            </a></li>
                        <li itemscope itemtype="http://schema.org/CreativeWork"><a href="lato.html" id="lato"
                                style="background-image: url('/img/lato-admin.png');" data-destination="lato"
                                itemprop="url" class="case-study">
                                <div class="case-study-mask"></div>
                                <div class="case-study-reveal-mask"></div>
                                <div class="case-study-mask-number">
                                    <div class="case-study-mask-back">02</div>
                                    <div class="case-study-mask-front">
                                        <div data-index="02" class="case-study-mask-overlay">02</div>
                                    </div>
                                </div>
                                <div class="case-study-text-section">
                                    <h3 itemprop="name" class="h2 case-study-title">Project Lato</h3>
                                    <h5 itemprop="description" class="case-study-subtitle">The Next generation
                                        Management System.</h5><button class="the-button call-to-button"><span
                                            class="button-text">Case Study</span>
                                        <div class="button-mask"></div><span class="button-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                                <path
                                                    d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                                </path>
                                            </svg></span>
                                    </button>
                                </div>
                            </a></li>
                        <li itemscope itemtype="http://schema.org/CreativeWork"><a href="la-francesca.html"
                                id="la-francesca" style="background-image: url('/img/la-francesca-work.jpg');"
                                data-destination="la-francesca" itemprop="url" class="case-study">
                                <div class="case-study-mask"></div>
                                <div class="case-study-reveal-mask"></div>
                                <div class="case-study-mask-number">
                                    <div class="case-study-mask-back">03</div>
                                    <div class="case-study-mask-front">
                                        <div data-index="03" class="case-study-mask-overlay">03</div>
                                    </div>
                                </div>
                                <div class="case-study-text-section">
                                    <h3 itemprop="name" class="h2 case-study-title">Villaggi La Francesca</h3>
                                    <h5 itemprop="description" class="case-study-subtitle">A green oasis on the sea
                                        of
                                        the Cinque Terre.</h5><button class="the-button call-to-button"><span
                                            class="button-text">Case Study</span>
                                        <div class="button-mask"></div><span class="button-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                                <path
                                                    d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                                </path>
                                            </svg></span>
                                    </button>
                                </div>
                            </a></li>
                        <li itemscope itemtype="http://schema.org/CreativeWork"><a href="sportland.html" id="sportland"
                                style="background-image: url('/img/sportland-work.jpg');" data-destination="sportland"
                                itemprop="url" class="case-study">
                                <div class="case-study-mask"></div>
                                <div class="case-study-reveal-mask"></div>
                                <div class="case-study-mask-number">
                                    <div class="case-study-mask-back">04</div>
                                    <div class="case-study-mask-front">
                                        <div data-index="04" class="case-study-mask-overlay">04</div>
                                    </div>
                                </div>
                                <div class="case-study-text-section">
                                    <h3 itemprop="name" class="h2 case-study-title">Project Sportland</h3>
                                    <h5 itemprop="description" class="case-study-subtitle">The Nature of Wellness.
                                    </h5>
                                    <button class="the-button call-to-button"><span class="button-text">Case
                                            Study</span>
                                        <div class="button-mask"></div><span class="button-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewbox="0 0 476.213 476.213">
                                                <path
                                                    d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                                                </path>
                                            </svg></span>
                                    </button>
                                </div>
                            </a></li>
                    </ul>
                </div>
            </section>
            <section class="section mobile-only">
                <div class="section-mask"></div>
                <div class="content">
                    <div class="button-content text-center"><button class="the-button button-big open-contact">Contact
                            me</button></div>
                </div>
            </section>
            <section id="experiments" class="experiments-section">
                <div class="section-mask"></div>
                <div class="inner-container">
                    <div class="section-text-mask">
                        <h4 class="h5 section-subtitle">Experiments &amp; Open Source</h4>
                    </div>
                    <div class="section-text-mask">
                        <h2 class="h3 section-title">Web is fun.</h2>
                    </div>
                </div>
                <div class="inner-container hidden">
                    <div class="experiments-mask-reveal"><span></span><span></span></div>
                    <div class="inner-container"><a href="http://codepen.io/rickzanutta/pen/yjaeB" target="_blank"
                            rel="noopener" class="experiment">
                            <div class="experiment-mask"></div>
                            <div class="experiment-number-mask"><span>01</span></div>
                            <div class="experiment-circle">
                                <div class="experiment-image"></div>
                            </div>
                            <div class="experiment-title-area">
                                <div class="experiment-title-label">Title</div>
                                <div class="experiment-title">CSS3 spin preloader + preload Page</div>
                            </div>
                            <div class="experiment-number-area">&nbsp;</div>
                        </a><a href="http://codepen.io/rickzanutta/pen/NNzGVd" target="_blank" rel="noopener"
                            class="experiment">
                            <div class="experiment-mask"></div>
                            <div class="experiment-number-mask"><span>02</span></div>
                            <div class="experiment-circle">
                                <div class="experiment-image"></div>
                            </div>
                            <div class="experiment-title-area">
                                <div class="experiment-title-label">Title</div>
                                <div class="experiment-title">Search Input context animation</div>
                            </div>
                            <div class="experiment-number-area">&nbsp;</div>
                        </a><a href="https://github.com/Riccardo-Zanutta/brick" target="_blank" rel="noopener"
                            class="experiment">
                            <div class="experiment-mask"></div>
                            <div class="experiment-number-mask"><span>03</span></div>
                            <div class="experiment-circle">
                                <div class="experiment-image"></div>
                            </div>
                            <div class="experiment-title-area">
                                <div class="experiment-title-label">Title</div>
                                <div class="experiment-title">BRick Boilerplate</div>
                            </div>
                            <div class="experiment-number-area">&nbsp;</div>
                        </a><a href="http://codepen.io/rickzanutta/pen/aOQddB" target="_blank" rel="noopener"
                            class="experiment">
                            <div class="experiment-mask"></div>
                            <div class="experiment-number-mask"><span>04</span></div>
                            <div class="experiment-circle">
                                <div class="experiment-image"></div>
                            </div>
                            <div class="experiment-title-area">
                                <div class="experiment-title-label">Title</div>
                                <div class="experiment-title">Open & Close Menu Animation</div>
                            </div>
                            <div class="experiment-number-area">&nbsp;</div>
                        </a></div>
                </div>
            </section>
            <ContactForm />

        </main>



    </div>
</template>

<script>

export default {

    head: {
        link: [
            {
                rel: "stylesheet",
                href: "/css/ptailwind.css"
            },
            {
                rel: "stylesheet",
                href:
                    "https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.css"
            }
        ],
        script: [

            {
                src: "https://cdn.jsdelivr.net/npm/froala-editor@latest",

            },
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
