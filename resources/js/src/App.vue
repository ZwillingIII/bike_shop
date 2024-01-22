<template>
    <Header />
    <router-view />
</template>

<style lang="sass">

@font-face
    font-family: Inter
    src: url("@fonts/inter/Inter-Regular.ttf")

a
    text-decoration: none
    color: #000000

body
    font-family: Inter
    margin: 0
    padding: 0

.container
    padding: 28px 0 28px 0
    max-width: 1390px
    margin: 0 auto
    position: relative

</style>

<script>
import Header from "@/src/components/Header.vue";

export default {
    name: "App",
    components: {
        Header,
    }
}
</script>
