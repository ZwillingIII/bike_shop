<template lang="pug">
.contacts-data
  .container
    .contacts-data__items
      .contacts-data__item( v-for="item in items" )
        .contacts-data__img
          img( :src="item.img" )
        .contacts-data__info
          div( v-for="data in item.data" )
            template( v-if="data.link" )
              a.contacts-data__link( :href="data.href" ) {{ data.text }}
            template( v-else )
              span {{ data.text }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: '/svg/phone.svg',
          data: [
            {
              text: '+7 (495) 055-75-86',
              link: true,
              href: 'tel:+7 (495) 055-75-86'
            },
            {
              text: '+7 (965) 142-22-99',
              link: true,
              href: 'tel:+7 (965) 142-22-99'
            }
          ]
        },
        {
          img: '/svg/address.svg',
          data: [
            {
              text: 'г. Москва,',
              link: false
            },
            {
              text: 'ул. Доватора, 7/8 с1'
            }
          ]
        },
        {
          img: '/svg/email.svg',
          data: [
            {
              text: 'order@world-bike.ru',
              link: true,
              href: 'mailto:order@world-bike.ru'
            }
          ]
        },
        {
          img: '/svg/schedule.svg',
          data: [
            {
              text: 'Без выходных ',
              link: false
            },
            {
              text: '10:00-20:00',
              link: false
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.contacts-data
  padding: 40px 0 180px 0
  &__items
    display: flex
    justify-content: space-between
  &__item
    display: flex
    gap: 16px
  &__info
    line-height: 1.6
    font-weight: 300
    font-size: 16px
</style>
