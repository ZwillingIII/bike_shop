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
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass">
.main-catalog
  padding: 160px 0 80px
  &__items
    display: grid
    grid-template-columns: repeat(6, 1fr)
    grid-template-rows: repeat(5, 1fr)
    gap: 16px
    a
      color: #fff
    a:nth-child(1n)
      grid-area: 1 / 1 / 3 / 7
      background: #F57520
    a:nth-child(2n)
      grid-area: 3 / 1 / 7 / 3
      background: #101010
    a:nth-child(3n)
      grid-area: 3 / 3 / 4 / 5
      background: #101010
    a:nth-child(4n)
      grid-area: 3 / 5 / 5 / 7
      background: #101010
    a:nth-child(5n)
      grid-area: 4 / 3 / 6 / 5
      background: #101010
    a:nth-child(6n)
      grid-area: 5 / 5 / 6 / 7
      background: #101010
</style>

<script>
export default {
  data() {
    return {
      section: [
        {
          name: 'Велосипеды',
          img: '',
          link: '',
        },
        {
          name: 'Trade-in',
          img: '',
          link: '',
        },
        {
          name: 'Запчасти',
          img: '',
          link: '',
        },
        {
          name: 'Аксессуары',
          img: '',
          link: '',
        },
        {
          name: 'Экипировка',
          img: '',
          link: '',
        },
        {
          name: 'Велостанки',
          img: '',
          link: '',
        },
      ]
    }
  }
}
</script>
