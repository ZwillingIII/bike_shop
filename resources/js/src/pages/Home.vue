<template>
  <Banner />
  <QuickSect />
  <Brands />
  <NewsProducts />
</template>

<script>
import Banner from "@/src/components/Banner.vue";
import Brands from "@/src/components/Brands.vue";
import QuickSect from "@/src/components/QuickSect.vue";
import NewsProducts from "@/src/components/NewsProducts.vue";
export default {
  components: {
    Banner,
    Brands,
    QuickSect,
    NewsProducts
  }
}
</script>

<style>

</style>
