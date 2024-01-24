<template>
<div class="news grey-back">
  <div class="container">
    <div class="news-title section-title">
      Новинки
    </div>
    <div class="news-items">
      <product-card v-for="item in products" :data="item" />
    </div>
    <div class="news__show-all_wrap">
      <a class="news__show-all_btn">Показать всё</a>
    </div>
  </div>
</div>
</template>

<style lang="sass">
.news
  padding: 80px 0
  position: relative
  &__show-all_wrap
    position: absolute
    bottom: 0
    width: 100%
    font-size: 12px
    font-style: normal
    font-weight: 400
    line-height: 160%
    text-transform: uppercase
    text-align: center
  &-items
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 40px
    margin-top: 80px
</style>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
          inStock: false,
          countryImg: "/img/country/italy.svg",
          price: 684840,
          disc: 0,
          prevImg: "/img/products/1.png"
        },
        {
          id: 1,
          name: "Trek Verve 2 Disc Lithium Grey HYBD 2022",
          inStock: false,
          countryImg: "/img/country/usa.svg",
          price: 89300,
          disc: 0,
          prevImg: "/img/products/2.png"
        },
        {
          id: 2,
          name: "Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022",
          inStock: true,
          countryImg: "/img/country/usa.svg",
          price: 115000,
          disc: 0,
          prevImg: "/img/products/3.png"
        },
      ]
    }
  }
}
</script>
