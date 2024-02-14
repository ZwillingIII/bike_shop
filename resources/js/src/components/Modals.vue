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
      show: false,
      menu: false,
      formResult: false,
      formResultText: '',
    }
  },
  methods: {
    openMenu() {
      // this.show = true;
      // this.menu = true;
      console.log(1)
    },
    closeModal() {
      this.$emitter.emit('open-menu', {
        bg: false,
        menu: false,
      });
      this.$emitter.emit('open-res', {
        bg: false,
        formResult: false,
      });
      document.body.style.overflow = 'auto';
    }
  },
  created() {
    this.$emitter.on('open-menu', (evt) => {
      this.show = evt.bg;
      this.menu = evt.menu;
      if (evt.bg) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
    this.$emitter.on('open-res', (evt) => {
      this.show = evt.bg;
      this.formResult = evt.check;
      this.formResultText = evt.text;
      if (evt.bg) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    })
  },
}
</script>

<template lang="pug">
  Menu( :menu="menu" )
  FormRes( :check="formResult", :text="formResultText" )
  .modal-bg( :class="{ active: show }", @click="closeModal" )
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
