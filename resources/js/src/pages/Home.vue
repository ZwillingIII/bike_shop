<template>
  <Banner />
  <QuickSect />
  <Brands />
  <NewsProducts />
  <Catalog />
  <Benefits />
</template>

<script>
import Banner from "@/src/components/Banner.vue";
import Brands from "@/src/components/Brands.vue";
import QuickSect from "@/src/components/QuickSect.vue";
import NewsProducts from "@/src/components/NewsProducts.vue";
import Catalog from "@/src/components/MainCatalogSect.vue";
import Benefits from "@/src/components/Benefits.vue";
export default {
  components: {
    Banner,
    Brands,
    QuickSect,
    NewsProducts,
    Catalog,
    Benefits
  }
}
</script>

<style>

</style>
