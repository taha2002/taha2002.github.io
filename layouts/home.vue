<template>
    <div>
        <LoaderAnimation :key="$route.path" />
        <div id="page-wrap">
            <HeaderHome />
            <Nuxt />
        </div>
        <!-- footer -->
        <Footer />
    </div>
</template>
