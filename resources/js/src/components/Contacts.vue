<template lang="pug">
.contacts
  .container
    .section-title Контакты
  yandex-map.contacts__map(
    :settings="settings"
    :coordinates="coords"
    :zoom="zoom"
  )
    yandex-marker(
      :coordinates="coords"
      :marker-id="0"
    )

  contact-data
</template>

<style scoped lang="sass">
.contacts
  &__map
    width: 100%
    height: 600px
</style>

<script>
// Plugins
import { YandexMap, YandexMarker } from "vue-yandex-maps";

// Components
import ContactData from "@/src/components/ContactData.vue";

export default {
  name: 'Contacts',
  components: {
    YandexMap,
    YandexMarker,
    ContactData
  },
  data() {
    return {
      marker: '/svg/map-marker.svg',
      settings: {
        apiKey: 'd5735d2b-1be0-46d7-a37a-9ad42ec40288',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      },
      coords: [
        56.146467,
        47.217401
      ],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '/svg/map-marker.svg',
        imageSize: [112, 138],
        imageOffset: [0, 0],
        content: '123 v12',
        contentOffset: [0, 15],
        contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      },
      zoom: 17,
    }
  },
}
</script>
