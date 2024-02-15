<template>
    <div class="header" :class="{ 'header-black': route }">
        <div class="container">
            <div class="header-wrap">
                <div class="header-left">
                    <router-link to="/">
                        <img :src="logo" alt="">
                    </router-link>
                </div>
                <div class="header-right">
                    <div class="header-menu">
                        <router-link to="">trade in</router-link>
                        <router-link to="/catalog">велосипеды</router-link>
                        <router-link to="">запчасти</router-link>
                        <router-link to="">экипировка</router-link>
                        <router-link to="">аксессуары</router-link>
                        <router-link to="">велостанки</router-link>
                    </div>
                    <div class="header-actions">
                        <div class="header-action">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 10.5C16 14.6421 12.6421 18 8.5 18C4.35786 18 1 14.6421 1 10.5C1 6.35786 4.35786 3 8.5 3C12.6421 3 16 6.35786 16 10.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.9999 19.9999L13.8032 15.8032" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="header-action">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 15H6C3.79086 15 2 16.7909 2 19V21H10H18V19C18 16.7909 16.2091 15 14 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="header-action">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle v-if="favoriteCount" cx="19" cy="5" r="3" fill="#F57520"/>
                            </svg>
                        </div>
                        <div class="header-action">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17H6.5L4.5 3H2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.78564 5H20.9999L17.9999 14H6.07135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle v-if="cardCount" cx="19" cy="5" r="3" fill="#F57520"/>
                            </svg>
                        </div>
                    </div>
                    <div class="header-burger" @click="showMenu">
                        <span class="header-burger__line header-burger_frs"></span>
                        <span class="header-burger__line header-burger_other"></span>
                        <span class="header-burger__line header-burger_other"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "@svg/logo.svg";

export default {
  data() {
    return {
      logo: Logo,
      favoriteCount: true,
      cardCount: false,
      route: false
    }
  },
  async created() {
    this.$watch(
      () => this.$route.name,
      async () => {
        if (this.$route.name != 'main') this.route = true
        else this.route = false
      }
    )
  },
  methods: {
    showMenu() {
      this.$emitter.emit('open-menu', {
        menu: true,
        bg: true
      })
    }
  }
}
</script>

<style lang="sass">
.header
    position: relative
    z-index: 2
    &-black
      background-color: #000
    &-wrap
        display: flex
        justify-content: space-between
        align-items: center
    &-burger
        width: 32px
        display: flex
        flex-direction: column
        gap: 9px
        align-items: flex-end
        transition: all 0.3s
        &__line
            display: block
            height: 1.5px
            width: 100%
            background: #fff
        &_other
            width: 24px
            transition: all 0.3s
        &:hover
            .header-burger_other
                width: 100%
    &-right
        display: flex
        align-items: center
        gap: 4.375em
    &-menu
        display: flex
        gap: 32px
        & a
            color: #fff
            transition: all 0.3s
            cursor: pointer
            &:hover
                color: #F57520
    &-actions
        display: flex
        gap: 24px
    &-action
        svg
            & path
                transition: all 0.3s
            &:hover path
                stroke: #F57520
</style>
