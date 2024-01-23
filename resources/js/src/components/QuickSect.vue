<template>
<div class="quick-sect">
  <div class="quick-sect-wrap">
    <div class="quick-sect-items">
      <div class="quick-sect-item quick-sect-frst">
        <div class="quick-sect-text">
          <div class="quick-sect-title">
            Экстремальное вождение на горном велосипеде
          </div>
          <a class="quick-sect-btn btn-a">Подробнее</a>
          </div>
      </div>
      <div class="quick-sect-item quick-sect-sec">
        <div class="quick-sect-text">
          <div class="quick-sect-title">
            Велосипеды для профессионалов
          </div>
          <a class="quick-sect-btn btn-a">Подробнее</a>
        </div>
      </div>
      <div class="quick-sect-item quick-sect-third">
        <div class="quick-sect-text">
          <div class="quick-sect-title">
            Долгая поездка на шоссейном велосипеде
          </div>
          <a class="quick-sect-btn btn-a">Подробнее</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass">
.quick-sect
  &-items
    display: grid
    grid-template-columns: 1fr 1fr 1fr
  &-title
    color: #fff
    max-width: 200px
  &-frst
    background: #101010
  &-sec
    background: #131313
  &-third
    background: #2E2E2E
  &-item
    padding: 48px 48px 88px 48px
    transition: all 0.3s
    height: fit-content
    &:hover
      padding: 68px 48px 108px 48px
      margin-top: -20px
      z-index: 9
      .quick-sect-btn
        display: inline-block
  &-btn
    margin-top: 40px
    display: none
    transition: all 0.3s
</style>

<script>

</script>
