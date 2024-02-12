<script>
export default {
  name: 'Footer',
  data() {
    return {
      logo: "/svg/logo.svg",
      phoneLogo: "/svg/phone-black.svg",
      addressLogo: "/svg/address-black.svg",
      mailLogo: "/svg/mail-black.svg",
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
            a.footer__column-item Trade-in
            a.footer__column-item Велосипеды
            a.footer__column-item Экипировка
            a.footer__column-item Запчасти
            a.footer__column-item Велостанки
            a.footer__column-item Аксессуары
        .footer__column
          .footer__column-title Для клиента
          .footer__column-items
            a.footer__column-item О нас
            a.footer__column-item Доставка и оплата
            a.footer__column-item Блог
            a.footer__column-item Контакты
            a.footer__column-item Веломастерская
            a.footer__column-item Хранение
            a.footer__column-item Гарантии
        .footer__column
          .footer__column-title Контакты
          .footer__column-items
            .footer__column-item
              img( :src="phoneLogo" )
              .footer__column-item_content
                a( href="tel:+7(495)055-75-86" ) +7(495)055-75-86
                a( href="tel:+7(965)142-22-99" ) +7(965)142-22-99
            .footer__column-item
              img( :src="addressLogo" )
              .footer__column-item_content г. Москва, ул.<br /> Доватора, 7/8 с1
            .footer__column-item
              img( :src="mailLogo" )
              .footer__column-item_content
                a( href="mailto:order@world-bike.ru" ) order@world-bike.ru
      .footer__bottom
</template>

<style scoped lang="sass">
.footer
  background: #101010
  color: #fff
  a
    color: #fff
  &__top
    display: flex
    justify-content: space-between
    padding: 102px 0 40px 0
</style>
