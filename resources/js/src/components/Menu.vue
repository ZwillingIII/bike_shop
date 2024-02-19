<script>
export default {
  name: "Menu",
  data() {
    return {
      close: '/svg/close.svg',
    }
  },
  computed: {
    getMenu() {
      return this.$store.getters.getMenu;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('openMenu', false);
      this.$store.commit('openBg', false);
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<template lang="pug">
.menu( :class="{ active: getMenu }" )
  .menu-wrap
    .menu-close
      img( :src="close", @click="closeModal" )
    .menu-title Доп. информация
    .menu-items
      a.menu-item О нас
      a.menu-item Веломастерская
      a.menu-item Хранение
      a.menu-item Гарантии
      a.menu-item Пользовательское соглашение
      a.menu-item Доставка и оплата
      a.menu-item Блог
      a.menu-item Контакты
</template>

<style lang="sass">
.menu
  position: fixed
  right: -30%
  top: 0
  bottom: 0
  left: auto
  width: 30%
  height: 100%
  background-color: #fff
  z-index: 4
  transition: all 0.3s
  &.active
    right: 0
  &-wrap
    padding: 40px
  &-close
    display: flex
    justify-content: end
  &-title
    margin-top: 40px
    font-size: 40px
    font-weight: 600
    text-transform: uppercase
  &-items
    margin-top: 48px
    display: flex
    flex-direction: column
    gap: 24px
  &-item
    font-size: 18px
    font-weight: 500
    transition: all 0.3s
    &:hover
      color: #f57520
</style>
