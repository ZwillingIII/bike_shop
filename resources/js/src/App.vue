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

.btn-a
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: 123%
  color: #F57520
  &:hover
    color: #fff

.grey-back
  background: #F8F8F8

.section-title
  font-size: 64px
  font-style: normal
  font-weight: 400
  line-height: 123%
  letter-spacing: 3.2px

.green
  color: #4D932C
.red
  color: #F53A20

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
