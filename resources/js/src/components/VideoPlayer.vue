<template>
  <div class="video">
    <video ref="videoPlayer" class="video-js vjs-styles-defaults"></video>
  </div>
</template>
<script>
// Importing video-js
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  // initializing the video player
  // when the component is being mounted
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options,() => {
      this.player.log('video player ready', this);
    });
  },
  // destroying the video player
  // when the component is being destroyed
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
</script>

<style lang="sass">
.video
  height: 600px
  &-js
    width: 100%
</style>
