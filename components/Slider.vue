<template>
    <div>
        <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div v-for="(image, index) in images" :key="index" class="mySlides fade">
                <div class="numbertext">{{ index + 1 }}/ {{ images.length }}</div>
                <img :src="image" style="width:100%">
                <div class="text">{{image.cap}}</div>
            </div>
            <!-- Next and previous buttons -->
            <!-- <div class="prev" @click="plusSlides(-1)">&#10094;</div>
            <div class="next" @click="plusSlides(1)">&#10095;</div> -->
        </div>
        <!-- <br>

         The dots/circles -->
        <!-- <div style="text-align:center">
            <span v-for="(image, index) in images" :key="index" class="dot" @click="currentSlide(index + 1)"></span>
        </div> -->

        <div class="slider-controler">
            <div @click="plusSlides(-1)" class="controler-prev">
                <div class="con-prev">&#10094;</div>
                <div class="">Previous</div>
            </div>
            <div @click="plusSlides(1)" class="controler-next">
                <div class="con-next">&#10095;</div>
                <div class="">Next</div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props: ['images'],
    data: () => ({
        slideIndex: 1
    }),
    mounted() {
        console.log('images',this.images)
        this.showSlides(this.slideIndex)

    },
    methods: {
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },
        showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            // let dots = document.getElementsByClassName("dot");

            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.slideIndex - 1].style.display = "block";

            // for (i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            // }

            // dots[this.slideIndex - 1].className += " active";
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box
}

/* Slideshow container */
.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

/* Hide the images by default */
.mySlides {
    display: none;
}

/* Next & previous buttons */
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active,
.dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

.slider-controler {
    width: 100%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;
    font-size: 20px;
}

.controler-next,
.controler-prev {
    display: flex;
    width: 50%;
}

.controler-next {
    flex-direction: row-reverse;
}

.con-next,
.con-prev {
    width: 40px;
    text-align: center;
}
</style>
