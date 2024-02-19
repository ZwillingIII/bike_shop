<script>
import Menu from "@/src/components/Menu.vue";
import FormRes from "@/src/components/FormRes.vue";
export default {
  name: "Modals",
  components: {
    Menu,
    FormRes
  },
  data() {
    return {
      show: this.$store.state.bg,
      menu: this.$store.state.menu,
      formResultText: '',
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('openMenu', false);
      this.$store.commit('openBg', false);
      this.$store.commit('openSuccess', false);
      document.body.style.overflow = 'auto';
    }
  },
  computed: {
    bgShow() {
      return this.$store.getters.getBg;
    }
  },
}
</script>

<template lang="pug">
  Menu
  FormRes( :check="formResult", :text="formResultText" )
  .modal-bg( :class="{ active: bgShow }", @click="closeModal" )
</template>

<style scoped lang="sass">
.modal-bg
  position: fixed
  top: 0
  bottom: 0
  right: 0
  left: 0
  background-color: #000
  opacity: 0.5
  visibility: hidden
  z-index: 2
  &.active
    visibility: visible
</style>
