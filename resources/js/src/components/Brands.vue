<template>
    <div class="brands">
        <div class="brands-wrap">
            <div class="brands-items">
                <Vue3Marquee class="brands-marquee">
                    <div class="brands-item" v-for="item in brands">
                        <img :src="item" alt="">
                    </div>
                </Vue3Marquee>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
.brands
  &-item
    img
      max-width: 295px
  &-marquee
    gap: 80px
    .marquee
      gap: 80px
</style>

<script>
import { Vue3Marquee } from 'vue3-marquee'
export default {
    name: "Brands",
    components: {
        Vue3Marquee
    },
    data() {
        return {
            brands: [
              '/img/brands/1.png',
                '/img/brands/2.png',
                '/img/brands/3.png',
                '/img/brands/4.png',
                '/img/brands/5.png',
                '/img/brands/6.png',
                '/img/brands/7.png'
            ],
        }
    }
}
</script>
