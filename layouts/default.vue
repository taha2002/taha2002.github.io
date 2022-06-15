<template>
    <div>
        <LoaderAnimation :key="$route.path" />
        <div id="page-wrap">
            <Header />
            <Nuxt />
        </div>
        <!-- footer -->
        <Footer />
    </div>
</template>
