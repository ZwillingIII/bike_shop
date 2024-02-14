<script>
import Header from "@/src/components/Header.vue";
import Footer from "@/src/components/Footer.vue";
import Modals from "@/src/components/Modals.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Modals
  },
}
</script>

<template>
  <Modals />
  <Header />
  <router-view />
  <Footer />
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
  font-weight: 600
  line-height: 123%
  letter-spacing: 3.2px
  text-transform: uppercase
  width: 50%
  &__desc
    font-size: 16px
    font-weight: 400
    width: 35%
    line-height: 25px
    display: flex
    flex-direction: column
    &-more
      margin-top: 30px

.green
  color: #4D932C
.red
  color: #F53A20
.grey-btn
  color: #B3B3B3

.form
  &__input
    padding: 10px 16px 10px 16px
    font-size: 16px
    font-weight: 400
    border-radius: 5px
    outline: none
    border: 0px
    &::placeholder
      color: #b3b3b3
  &__submit
    background: #f57520
    border-radius: 5px
    color: #fff
    padding: 13px 37px
    outline: none
    border: none
  &__checkbox
    position: relative
    &-input
      &:checked
        & ~ .form__checkmark
          background-color: #f57520
          &:after
            opacity: 1
  &__checkmark
    position: absolute
    top: 0
    left: 0
    height: 20px
    width: 20px
    background-color: #eee
    transition: background-color 0.25s ease
    border-radius: 4px
    &:after
      content: ""
      position: absolute
      left: 6px
      top: 2px
      width: 5px
      height: 10px
      border: solid #fff
      border-width: 0 2px 2px 0
      transform: rotate(45deg)
      opacity: 0
      transition: opacity 0.25s ease

.privacy-err
  color: #f5391f
  transition: all 0.3s
</style>
