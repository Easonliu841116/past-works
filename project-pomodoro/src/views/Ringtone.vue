<template>
  <div>
    <div class="ringtone-list-container">
      <div class="ringtone-title">
        <span>WORK</span>
      </div>
      <ul class="ringtone-list-wrapper">
        <li class="ringtones" v-for="(item, key) in audioPlayer" :key="key">
          <input class="ringtone-selector" :value="item"
           :id="`w-${item}`" name="ringtone-work" type="radio" @click="playSound(item, true, 1)"/>
          <label class="ringtone-text" :for="`w-${item}`">
            <span></span>
            {{item.toUpperCase()}}
            <a class="stop-play" href="#" @click.prevent="playSound(item, false, 1)">×</a>
          </label>
        </li>
      </ul>
    </div>
    <div class="ringtone-list-container">
      <div class="ringtone-title">
        <span>BREAK</span>
      </div>
      <ul class="ringtone-list-wrapper">
        <li class="ringtones" v-for="(item, key) in audioPlayer" :key="key">
          <input class="ringtone-selector" :value="item"
           :id="`b-${item}`" name="ringtone-break" type="radio" @click="playSound(item, true, 2)"/>
          <label class="ringtone-text" :for="`b-${item}`">
            <span></span>
            {{item.toUpperCase()}}
            <a class="stop-play" href="#" @click.prevent="playSound(item, false, 2)">×</a>
          </label>
        </li>
      </ul>
    </div>
    <div id="audio">
      <audio  data-key="alert" >
        <source src="../assets/media/alert.mp3">
      </audio>
      <audio  data-key="bird">
        <source src="../assets/media/bird.mp3">
      </audio>
      <audio  data-key="drop">
        <source src="../assets/media/drop.mp3">
      </audio>
      <audio  data-key="ring">
        <source src="../assets/media/ring.mp3">
      </audio>
      <audio  data-key="default">
        <source src="../assets/media/default.mp3">
      </audio>
      <audio  data-key="beep">
        <source src="../assets/media/beep.mp3">
      </audio>
      <audio  data-key="bugle">
        <source src="../assets/media/bugle.mp3">
      </audio>
      <audio  data-key="horn">
        <source src="../assets/media/horn.mp3">
      </audio>
      <audio  data-key="warning">
        <source src="../assets/media/warning.mp3">
      </audio>
      <audio  data-key="alarm">
        <source src="../assets/media/alarm.mp3">
      </audio>
      <audio  data-key="bell">
        <source src="../assets/media/bell.mp3">
      </audio>
      <audio  data-key="digital">
        <source src="../assets/media/digital.mp3">
      </audio>
      <audio  data-key="music">
        <source src="../assets/media/music.mp3">
      </audio>
      <audio  data-key="whistle">
        <source src="../assets/media/whistle.mp3">
      </audio>
      <audio  data-key="none">
        <source src="../assets/media/none.mp3">
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
      audioPlayer: [
        'none',
        'alert',
        'bird',
        'drop',
        'ring',
        'default',
        'beep',
        'bugle',
        'horn',
        'warning',
        'alarm',
        'bell',
        'digital',
        'music',
        'whistle',
      ],
    };
  },
  methods: {
    playSound(el, isPlay, type) {
      const vm = this;
      const sound = document.querySelector(`audio[data-key = "${el}"]`);
      if (isPlay) {
        sound.currentTime = 0;
        sound.play();
        vm.$store.dispatch('changeSound', { el, type });
      } else {
        sound.pause();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/ringtone.scss";
</style>
