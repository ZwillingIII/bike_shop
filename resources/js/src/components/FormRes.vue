<script>
export default {
  name: "FormRes",
  data() {
    return {
      img: '/svg/form-result.svg',
      close: '/svg/close.svg',
    }
  },
  computed: {
    open() {
      return this.$store.getters.getSuccess;
    },
    text() {
      return this.$store.getters.getSuccessTxt;
    }
  },
  methods: {
    closeBtn() {
      this.$store.commit('openSuccess', false);
      this.$store.commit('openBg', false);
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<template lang="pug">
.form-result( :class="{ active: open }" )
  .form-result__close
    img( :src="close", @click="closeBtn" )
  .form-result__img
    img( :src="img" )
  .form-result__text {{ text }}
</template>

<style scoped lang="sass">
.form-result
  visibility: hidden
  position: fixed
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
  transition: all 0.3s
  background-color: #fff
  z-index: 3
  display: flex
  flex-direction: column
  justify-content: center
  gap: 40px
  padding: 25px 35px 55px 35px
  opacity: 0
  border-radius: 10px
  &.active
    visibility: visible
    opacity: 1
  &__close
    display: flex
    justify-content: end
  &__img
    display: flex
    justify-content: center
  &__text
    font-size: 64px
    line-height: 1.23
    letter-spacing: 0.05em
    font-weight: 600
    max-width: 515px
    text-align: center
    text-transform: uppercase
</style>
