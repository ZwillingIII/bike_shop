<script>
import Menu from "@/src/components/Menu.vue";
import { inject, onMounted, onUnmounted } from 'vue';
export default {
  name: "Modals",
  components: {
    Menu
  },
  data() {
    return {
      show: false,
      menu: false,
    }
  },
  setup() {
    const eventBus = inject('eventBus');
    // this.$emit('open-modal', (evt) => {
    //   console.log(1)
    // })
    onMounted(() => {
      eventBus.$on('openModal', (data) => {
        console.log(data)
      });
    });

    onUnmounted(() => {
      eventBus.$off('openModal');
    });
  },
  methods: {
    openMenu() {
      // this.show = true;
      // this.menu = true;
      console.log(1)
    }
  }
}
</script>

<template lang="pug">
  Menu( :menu="menu" )
  .modal-bg( :class="{ active: show }" )
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
