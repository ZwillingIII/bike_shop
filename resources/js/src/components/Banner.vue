<template>
<div class="banner">
    <div class="banner-wrap">
        <div class="banner-items">
            <Swiper
                :modules="modules"
                :loop="true"
                :pagination="true"
            >
                <SwiperSlide>
                    <div class="banner-item">
                        <div class="container">
                            <div class="banner-item__wrap">
                                <div class="banner-title">
                                    Электро велосипеды
                                </div>
                                <div class="banner-desc">
                                    Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий стандарт для данной категории
                                </div>
                                <a class="banner-btn">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="banner-item">
                        <div class="container">
                            <div class="banner-item__wrap">
                                <div class="banner-title">
                                    Тест тест
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="banner-item">
                        <div class="container">
                            <div class="banner-item__wrap">
                                <div class="banner-title">
                                    Тест тест
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination],
      }
    }
}
</script>

<style lang="sass">
.banner
    width: 100%
    margin-top: -110px
    &-item
        min-height: 875px
        background: url("/img/banner.png")
        &__wrap
            margin: 185px 0 0 0
            width: 680px
    &-title
        color: #fff
        font-size: 110px
        font-style: normal
        font-weight: 400
        line-height: 123% /* 135.3px */
        letter-spacing: 2.2px
    &-desc
        color: #fff
        font-size: 18px
        font-style: normal
        font-weight: 300
        line-height: 160% /* 28.8px */
        letter-spacing: 0.18px
        margin-top: 48px
    &-btn
        padding: 16px 45px
        background: #F57520
        color: #fff
        font-size: 16px
        font-weight: 500
        line-height: 123%
        display: inline-block
        border-radius: 10px
        margin-top: 40px
        transition: all 0.3s
        &:hover
            background: #f57e2f

.swiper
    &-pagination
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 64px
    &-pagination-bullet
        width: 12px
        height: 12px
        background: #4C4C4C
        opacity: 1
        &-active
            width: 19px
            height: 19px
            background: #F57520
</style>
