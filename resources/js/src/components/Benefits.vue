<template>
<div class="benefits">
  <div class="container">
    <div class="benefits-titlies">
      <div class="section-title">
        Ничего не сможет остановить вас
      </div>
      <div class="section-title__desc">
        Наша компания специализируется на продаже товаров для велосипедного спорта — велосипедов, запасных частей, аксессуаров и различного спортивного инвентаря для активного спорта и отдыха.
        <a href="" class="section-title__desc-more grey-btn">Подробнее</a>
      </div>
    </div>
  </div>
<!--  <div class="benefits-video">-->

<!--  </div>-->
<!--  <vue-plyr ref="benefits-video">-->
<!--    <div data-plyr-provider="youtube" data-plyr-embed-id="D5_xsiO7vfw"></div>-->
<!--  </vue-plyr>-->
<!--  <video-player :options="videoOptions" />-->
  <video-player :options="videoOptions" />

  <benefit-points />
</div>
</template>

<script>
import VideoPlayer from "@/src/components/VideoPlayer.vue";
import BenefitPoints from "@/src/components/BenefitPoints.vue";
import VideoTube from "@/src/components/VideoTube.vue";
export default {
  components: {
    VideoPlayer,
    BenefitPoints,
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        preload: false,
        fluid: false,
        poster: '/img/video-prev.png',
        height: 600,
        videoHeight: 600,
        sources: [
          {
            src: '/assets/main-video.mp4',
            type: 'video/mp4'
          }
        ]
      }
    }
  },
}
</script>

<style lang="sass">
.benefits
  padding-top: 80px
  &-titlies
    display: flex
    justify-content: space-between
  &-video
    max-height: 600px
</style>
