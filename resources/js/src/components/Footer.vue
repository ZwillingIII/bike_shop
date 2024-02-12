<script>
export default {
  name: 'Footer',
  data() {
    return {
      logo: "/svg/logo.svg",
    }
  }
}
</script>

<template lang="pug">
.footer
  .container
    .footer__wrap
      .footer__top
        .footer__column
          .footer__logo
            img( :src="logo" )
          .footer__info-text Компания World-bikes специализируется на продаже товаров для велосипедного спорта.
        .footer__column
          .footer__column-title Каталог
          .footer__column-items

        .footer__column
        .footer__column
      .footer__bottom
</template>

<style scoped lang="sass">

</style>
