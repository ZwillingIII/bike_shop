<template>
<div class="main-catalog">
  <div class="container">
    <div class="section-title">
      Каталог
    </div>
    <div class="main-catalog__wrap">
      <div class="main-catalog__items">
        <a v-for="item in section" href="" class="main-catalog__item">
          {{ item.name }}
          <img :src="item.img" alt="" class="main-catalog__item-img">
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass">
.main-catalog
  padding: 160px 0 80px
  &__wrap
    margin-top: 80px
  &__item
    &-img
      position: absolute
  &__items
    display: grid
    grid-template-columns: repeat(6, 1fr)
    grid-template-rows: repeat(2, 1fr)
    gap: 16px
    a
      color: #fff
      font-size: 40px
      font-weight: 600
      text-transform: uppercase
      display: flex
      border-radius: 10px
      position: relative
      overflow: hidden
    a:nth-child(1n)
      grid-area: 1 / 1 / 3 / 7
      background: #F57520
      height: 220px
      align-items: center
      padding-left: 80px
      img
        right: 0
        left: auto
        top: auto
        bottom: 0
        width: 46%
    a:nth-child(2n)
      grid-area: 3 / 1 / 6 / 3
      background: #101010
      height: 377px
      justify-content: center
      align-items: flex-start
      padding-top: 80px
      padding-left: 0
      img
        bottom: 0
        right: 0
        left: 0
        top: auto
        width: 100%
    a:nth-child(3n)
      grid-area: 3 / 3 / 4 / 5
      background: #101010
      height: 190px
      padding-left: 40px
      img
        top: auto
        left: auto
        right: 0
        bottom: 0
        width: 29%
    a:nth-child(4n)
      grid-area: 3 / 5 / 5 / 7
      background: #101010
      height: 212px
      justify-content: flex-start
      padding-top: 40px
      padding-left: 40px
      img
        top: auto
        left: auto
        right: 0
        bottom: 0
        width: 50%
    a:nth-child(5n)
      grid-area: 4 / 3 / 6 / 5
      background: #101010
      height: 222px
      align-items: flex-end
      padding-left: 40px
      padding-bottom: 30px
      img
        top: 0
        left: auto
        right: 0
        bottom: auto
        width: 50%
    a:nth-child(6n)
      grid-area: 5 / 5 / 6 / 7
      background: #101010
      height: 150px
      justify-content: flex-start
      padding-left: 40px
      padding-top: 40px
      img
        top: 0
        left: auto
        right: 0
        bottom: auto
        width: 30%
</style>

<script>
export default {
  data() {
    return {
      section: [
        {
          name: 'Велосипеды',
          img: '/img/main-sect/bicycles.png',
          link: '',
        },
        {
          name: 'Trade-in',
          img: '/img/main-sect/trade-in.png',
          link: '',
        },
        {
          name: 'Запчасти',
          img: '/img/main-sect/spares.png',
          link: '',
        },
        {
          name: 'Экипировка',
          img: '/img/main-sect/equipment.png',
          link: '',
        },
        {
          name: 'Аксессуары',
          img: '/img/main-sect/accessories.png',
          link: '',
        },
        {
          name: 'Велостанки',
          img: '/img/main-sect/bike-racks.png',
          link: '',
        },
      ]
    }
  }
}
</script>
