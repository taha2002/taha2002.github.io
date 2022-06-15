<template>
    <div>
        <LoaderAnimation :key="$route.path" />
        
        <div class="bright-theme blog" id="page-wrap">
            <Header />
            <Nuxt />
        </div>
        <!-- footer -->
        <Footer />
    </div>
</template>

