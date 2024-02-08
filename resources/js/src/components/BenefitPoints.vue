<template lang="pug">
.benefit-points
  .container
    .benefit-points__wrap
      .benefit-points__items
        .benefit-points__item(v-for="item in points")
          .benefit-points__item-top
            .benefit-points__item-img
              img(:src="item.img")
            .benefit-points__item-title {{ item.title }}
          .benefit-points__desc {{ item.desc }}
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          img: '/img/benefities/1.svg',
          title: 'Европейские бренды',
          desc: 'Представляем десятки европейских брендов',
        },
        {
          img: '/img/benefities/2.svg',
          title: 'Вечная гарантия',
          desc: 'На некоторые бренды предоставляем пожизненную гарантию',
        },
        {
          img: '/img/benefities/3.svg',
          title: 'Предпродажная настройка',
          desc: 'Специалисты настроят ваш велосипед наилучшим образом',
        },
        {
          img: '/img/benefities/4.svg',
          title: 'Доставка за 24 часа',
          desc: 'Доставляем товар всеми популярными транспортными компаниями',
        },
      ],
    }
  }
}
</script>

<style lang="sass">
.benefit-points
  background-color: #2E2E2E
  padding: 36px 0
  &__items
    display: flex
    gap: 44px
    justify-content: center
  &__item
    color: #fff
    display: flex
    flex-direction: column
    gap: 24px
    &-top
      display: flex
      align-items: center
      gap: 16px
    &-title
      font-size: 20px
      font-weight: 500
      line-height: 1.6
      white-space: nowrap
  &__desc
    font-size: 16px
    max-width: 237px
    line-height: 1.6
</style>
