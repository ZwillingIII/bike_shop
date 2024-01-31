<template>
<div class="card-wrap">
  <div class="card">
    <div class="card__top">
      <div class="card__country">
        <img :src="data.countryImg" alt="">
      </div>
      <div class="card__stock" :class="{ 'green':data.inStock,'red':!data.inStock }">
        <template v-if="data.inStock">
          В наличии
        </template>
        <template v-else>
          Не в наличии
        </template>
      </div>
    </div>
    <div class="card__center">
      <img :src="data.prevImg" alt="">
    </div>
    <div class="card__bottom">
      <div class="card__name">
        {{ data.name }}
      </div>
      <div class="card__price">
        {{ data.price.toLocaleString("ru") }} &#8381;
      </div>
    </div>
    <div class="card-btn__wrap">
      <a class="card__btn" data-event="buy-in-click" v-if="data.inStock">
        <img :src="inClickImg" alt="">
        <span>В 1 клик</span>
      </a>
      <a class="card__btn" data-event="subscribe" v-else>
        Подписаться
      </a>
    </div>
  </div>
</div>
</template>

<style lang="sass">
.card
  &__country
    img
      border-top-left-radius: 10px
  position: relative
  height: fit-content
  background: #fff
  border-radius: 10px
  transition: all 0.3s
  z-index: 2
  min-height: 443px
  &-wrap
    height: 443px
  &__price
    margin-top: 24px
  &__name
    font-size: 18px
    font-style: normal
    font-weight: 300
    line-height: 160%
    letter-spacing: 0.18px
    color: #101010
  &__stock
    padding: 16px
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 160%
  &__center
    padding: 0px 16px 16px 16px
    margin-top: -20px
  &__bottom
    padding: 0px 16px 20px 16px
  &__top
    display: flex
    justify-content: space-between
    position: relative
    z-index: 9
  &__btn
    display: flex
    align-items: center
    justify-content: center
    height: 0
    opacity: 0
    transition: all 0.3s
    background: #F57520
    color: #fff
    border-radius: 10px
    &:hover
      background: #f57e2f
  &:hover
    box-shadow: 0px 0px 0px 0px rgba(186, 186, 186, 0.10), 2px 9px 21px 0px rgba(186, 186, 186, 0.10), 6px 38px 38px 0px rgba(186, 186, 186, 0.09), 14px 84px 51px 0px rgba(186, 186, 186, 0.05), 25px 150px 61px 0px rgba(186, 186, 186, 0.01), 39px 235px 67px 0px rgba(186, 186, 186, 0.00)
    .card-btn__wrap
      padding-bottom: 16px
    .card__btn
      opacity: 1
      height: 100%
      margin: 0px 16px 16px 16px
      padding-top: 18px
      padding-bottom: 18px
</style>

<script>
export default {
  data() {
    return {
      inClickImg: "/img/in-click.svg",
    }
  },
  props: [
    'data'
  ]
}
</script>
