<template lang="pug">
.articles
  .container
    .section-title Последние обзоры
    .articles__wrap
      .articles__items
        swiper(
          :slides-per-view="'auto'"
          :space-between="40"
          :modules="modules"
          class="articles__swiper"
        )
          swiper-slide(v-for="item in news").articles__slide
            news-el(:data="item" )
</template>

<script>
import NewsEl from "@/src/components/NewsEl.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css/navigation';
export default {
  components: {
    NewsEl,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      news: [
        {
          id: 0,
          img: '/img/news/1.png',
          date: '25.01.2023',
          tag: 'обзор',
          name: 'BMC Kaius 01 идеальный гоночный гравийный велосипед',
          code: 'bmc-kaius-01'
        },
        {
          id: 1,
          img: '/img/news/2.png',
          date: '24.01.2023',
          tag: 'обзор',
          name: 'Первые поездки на новой гоночной ракете Wilier Urta SLR 100mm XC MTB, всего 9,8 кг!',
          code: 'wilier-urta-slr'
        },
        {
          id: 2,
          img: '/img/news/3.png',
          date: '25.01.2023',
          tag: 'обзор',
          name: 'Все новые гоночные велосипеды BMC Fourstroke XC оснащены волшебным подседельным штырем Autodrop.',
          code: 'bmc-kaius-01'
        },
        {
          id: 0,
          img: '/img/news/4.png',
          date: '25.01.2023',
          tag: 'обзор',
          name: 'BMC Kaius 01 идеальный гоночный гравийный велосипед',
          code: 'bmc-kaius-01'
        },
      ]
    }
  },
  setup() {
    return {
      modules: []
    }
  },
}
</script>

<style lang="sass">
.articles
  padding: 160px 0
  &__items
    margin-top: 80px
  &__slide
    width: 400px
  &__swiper
    overflow: unset
</style>
