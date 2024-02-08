<template lang="pug">
.article
  .article__img
    img(:src="data.img")
  .article__desc
    .article__date {{ data.date }}
    .article__tag {{ '#'+data.tag }}
    .article__name {{ data.name }}
    a.article__show-more(:href="link") Подробнее
</template>

<script>
export default {
  data() {
    return {
      link: "/news/" + this.data.code,
    }
  },
  props: [
    'data'
  ],
}
</script>

<style scoped lang="sass">
.article
  width: 400px
  height: 462px
  background-color: #000
  color: #fff
  border-radius: 10px
  position: relative
  &__img
    img
      border-top-right-radius: 10px
      border-top-left-radius: 10px
  &__desc
    padding: 24px
  &__tag
    color: #f57520
    margin-top: 8px
    line-height: 1.6
  &__name
    margin-top: 16px
    line-height: 1.6
  &__show-more
    display: inline-block
    margin-top: 19px
    color: #fff
    position: absolute
    bottom: 35px
    &:hover
      color: #f57520
</style>
