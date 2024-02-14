<script>
export default {
  name: "Menu",
  data() {
    return {
      close: '/svg/close.svg',
    }
  },
  props: [
    'menu'
  ],
  methods: {
    closeModal() {
      this.$emitter.emit('open-menu', {
        menu: false,
        bg: false
      })
    }
  }
}
</script>

<template lang="pug">
.menu( :class="{ active: menu }" )
  .menu-wrap
    .menu-close( @click="closeModal" )
      img( :src="close" )
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
