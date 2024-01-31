<template>
<div class="news grey-back">
  <div class="container">
    <div class="news-title section-title">
      Новинки
    </div>
    <div class="news-items">
      <swiper
        :slides-per-view="3"
        :space-between="40"
        :modules="modules"
        class="news-swiper"
        navigation
      >
        <swiper-slide v-for="item in products">
          <product-card :data="item" />
        </swiper-slide>
      </swiper>
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
    bottom: 100px
    width: 100%
    font-size: 12px
    font-style: normal
    font-weight: 400
    line-height: 160%
    text-transform: uppercase
    text-align: center
  &-items
    margin-top: 80px
    margin-bottom: 48px
    height: 600px
    overflow: hidden
  &-swiper
    overflow: visible
.news-items
  .swiper-button-prev,
  .swiper-button-next
    opacity: 1
    background: #000
    width: 43px
    height: 43px
    border-radius: 100%
    transition: all 0.3s
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled
    background: transparent
  .swiper-button-prev:after,
  .swiper-button-next:after
    font-family: none
    transition: all 0.3s
  .swiper-button-prev:after
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMTI0OSAyLjkwMDFMMC42OTk5MDEgMTEuMzAwMUMwLjU5OTkwMSAxMS40MDAxIDAuNTI5MjAxIDExLjUwODQgMC40ODc5MDEgMTEuNjI1MUMwLjQ0NTkwMSAxMS43NDE4IDAuNDI0OTAxIDExLjg2NjggMC40MjQ5MDEgMTIuMDAwMUMwLjQyNDkwMSAxMi4xMzM0IDAuNDQ1OTAxIDEyLjI1ODQgMC40ODc5MDEgMTIuMzc1MUMwLjUyOTIwMSAxMi40OTE4IDAuNTk5OTAxIDEyLjYwMDEgMC42OTk5MDEgMTIuNzAwMUw5LjEyNDkgMjEuMTI1MUM5LjM1ODI0IDIxLjM1ODQgOS42NDk5IDIxLjQ3NTEgOS45OTk5IDIxLjQ3NTFDMTAuMzQ5OSAyMS40NzUxIDEwLjY0OTkgMjEuMzUwMSAxMC44OTk5IDIxLjEwMDFDMTEuMTQ5OSAyMC44NTAxIDExLjI3NDkgMjAuNTU4NCAxMS4yNzQ5IDIwLjIyNTFDMTEuMjc0OSAxOS44OTE4IDExLjE0OTkgMTkuNjAwMSAxMC44OTk5IDE5LjM1MDFMMy41NDk5IDEyLjAwMDFMMTAuODk5OSA0LjY1MDFDMTEuMTMzMiA0LjQxNjggMTEuMjQ5OSA0LjEyOTQgMTEuMjQ5OSAzLjc4ODFDMTEuMjQ5OSAzLjQ0NjEgMTEuMTI0OSAzLjE1MDEgMTAuODc0OSAyLjkwMDFDMTAuNjI0OSAyLjY1MDEgMTAuMzMzMiAyLjUyNTEgOS45OTk5IDIuNTI1MUM5LjY2NjU3IDIuNTI1MSA5LjM3NDkgMi42NTAxIDkuMTI0OSAyLjkwMDFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
  .swiper-button-next:after
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE0IDI0IiBmaWxsPSJub25lIj4NCiAgPHBhdGggZD0iTTQuODc1MiAyMS4wOTk5TDEzLjMwMDIgMTIuNjk5OUMxMy40MDAyIDEyLjU5OTkgMTMuNDcwOSAxMi40OTE2IDEzLjUxMjIgMTIuMzc0OUMxMy41NTQyIDEyLjI1ODIgMTMuNTc1MiAxMi4xMzMyIDEzLjU3NTIgMTEuOTk5OUMxMy41NzUyIDExLjg2NjYgMTMuNTU0MiAxMS43NDE2IDEzLjUxMjIgMTEuNjI0OUMxMy40NzA5IDExLjUwODIgMTMuNDAwMiAxMS4zOTk5IDEzLjMwMDIgMTEuMjk5OUw0Ljg3NTIgMi44NzQ5QzQuNjQxODYgMi42NDE1NyA0LjM1MDIgMi41MjQ5IDQuMDAwMiAyLjUyNDlDMy42NTAyIDIuNTI0OSAzLjM1MDIgMi42NDk5IDMuMTAwMiAyLjg5OTlDMi44NTAyIDMuMTQ5OSAyLjcyNTIgMy40NDE1NyAyLjcyNTIgMy43NzQ5QzIuNzI1MiA0LjEwODI0IDIuODUwMiA0LjM5OTkgMy4xMDAyIDQuNjQ5OUwxMC40NTAyIDExLjk5OTlMMy4xMDAyIDE5LjM0OTlDMi44NjY4NiAxOS41ODMyIDIuNzUwMiAxOS44NzA2IDIuNzUwMiAyMC4yMTE5QzIuNzUwMiAyMC41NTM5IDIuODc1MiAyMC44NDk5IDMuMTI1MiAyMS4wOTk5QzMuMzc1MiAyMS4zNDk5IDMuNjY2ODYgMjEuNDc0OSA0LjAwMDIgMjEuNDc0OUM0LjMzMzUzIDIxLjQ3NDkgNC42MjUyIDIxLjM0OTkgNC44NzUyIDIxLjA5OTlaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+)
  .swiper-button-prev.swiper-button-disabled:after
    background: transparent
    padding: 10px
    border-radius: 100%
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNOS4xMjQ4IDIxLjA5OTlMMC42OTk4MDUgMTIuNjk5OUMwLjU5OTgwNSAxMi41OTk5IDAuNTI5MTM4IDEyLjQ5MTYgMC40ODc4MDUgMTIuMzc0OUMwLjQ0NTgwNSAxMi4yNTgyIDAuNDI0ODA1IDEyLjEzMzIgMC40MjQ4MDUgMTEuOTk5OUMwLjQyNDgwNSAxMS44NjY2IDAuNDQ1ODA1IDExLjc0MTYgMC40ODc4MDUgMTEuNjI0OUMwLjUyOTEzOCAxMS41MDgyIDAuNTk5ODA1IDExLjM5OTkgMC42OTk4MDUgMTEuMjk5OUw5LjEyNDggMi44NzQ5QzkuMzU4MTQgMi42NDE1NyA5LjY0OTggMi41MjQ5IDkuOTk5OCAyLjUyNDlDMTAuMzQ5OCAyLjUyNDkgMTAuNjQ5OCAyLjY0OTkgMTAuODk5OCAyLjg5OTlDMTEuMTQ5OCAzLjE0OTkgMTEuMjc0OCAzLjQ0MTU3IDExLjI3NDggMy43NzQ5QzExLjI3NDggNC4xMDgyNCAxMS4xNDk4IDQuMzk5OSAxMC44OTk4IDQuNjQ5OUwzLjU0OTggMTEuOTk5OUwxMC44OTk4IDE5LjM0OTlDMTEuMTMzMSAxOS41ODMyIDExLjI0OTggMTkuODcwNiAxMS4yNDk4IDIwLjIxMTlDMTEuMjQ5OCAyMC41NTM5IDExLjEyNDggMjAuODQ5OSAxMC44NzQ4IDIxLjA5OTlDMTAuNjI0OCAyMS4zNDk5IDEwLjMzMzEgMjEuNDc0OSA5Ljk5OTggMjEuNDc0OUM5LjY2NjQ3IDIxLjQ3NDkgOS4zNzQ4IDIxLjM0OTkgOS4xMjQ4IDIxLjA5OTlaIiBmaWxsPSIjMTAxMDEwIi8+Cjwvc3ZnPgo=)
  .swiper-button-next.swiper-button-disabled:after
    background: transparent
    padding: 10px
    border-radius: 100%
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE0IDI0IiBmaWxsPSJub25lIj4NCiAgPHBhdGggZD0iTTQuODc1MiAyLjkwMDFMMTMuMzAwMiAxMS4zMDAxQzEzLjQwMDIgMTEuNDAwMSAxMy40NzA5IDExLjUwODQgMTMuNTEyMiAxMS42MjUxQzEzLjU1NDIgMTEuNzQxOCAxMy41NzUyIDExLjg2NjggMTMuNTc1MiAxMi4wMDAxQzEzLjU3NTIgMTIuMTMzNCAxMy41NTQyIDEyLjI1ODQgMTMuNTEyMiAxMi4zNzUxQzEzLjQ3MDkgMTIuNDkxOCAxMy40MDAyIDEyLjYwMDEgMTMuMzAwMiAxMi43MDAxTDQuODc1MiAyMS4xMjUxQzQuNjQxODYgMjEuMzU4NCA0LjM1MDIgMjEuNDc1MSA0LjAwMDIgMjEuNDc1MUMzLjY1MDIgMjEuNDc1MSAzLjM1MDIgMjEuMzUwMSAzLjEwMDIgMjEuMTAwMUMyLjg1MDIgMjAuODUwMSAyLjcyNTIgMjAuNTU4NCAyLjcyNTIgMjAuMjI1MUMyLjcyNTIgMTkuODkxOCAyLjg1MDIgMTkuNjAwMSAzLjEwMDIgMTkuMzUwMUwxMC40NTAyIDEyLjAwMDFMMy4xMDAyIDQuNjUwMUMyLjg2NjkgNC40MTY4IDIuNzUwMiA0LjEyOTQgMi43NTAyIDMuNzg4MUMyLjc1MDIgMy40NDYxIDIuODc1MiAzLjE1MDEgMy4xMjUyIDIuOTAwMUMzLjM3NTIgMi42NTAxIDMuNjY2OSAyLjUyNTEgNC4wMDAyIDIuNTI1MUM0LjMzMzUzIDIuNTI1MSA0LjYyNTIgMi42NTAxIDQuODc1MiAyLjkwMDFaIiBmaWxsPSIjMTAxMDEwIi8+DQo8L3N2Zz4=)
</style>

<script>
import ProductCard from "./ProductCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, A11y } from "swiper/modules";
import 'swiper/css/navigation';

export default {
  components: {
    ProductCard,
    Swiper,
    SwiperSlide
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
        {
          id: 3,
          name: "Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022",
          inStock: true,
          countryImg: "/img/country/usa.svg",
          price: 115000,
          disc: 0,
          prevImg: "/img/products/3.png"
        },
      ]
    }
  },
  setup() {
    return {
      modules: [ Navigation, A11y ]
    };
  }
}
</script>
