<template>
  <div>
    <div class="ringtone-list-container">
      <div class="ringtone-title">
        <span>WORK</span>
      </div>
      <ul class="ringtone-list-wrapper">
        <li class="ringtones" v-for="(item, key) in audioPlayer" :key="key">
          <input class="ringtone-selector" :value="item"
           :id="`w-${item}`" name="ringtone-work" type="radio" @click="playSound(item)"/>
          <label class="ringtone-text" :for="`w-${item}`">
            <span></span>
            {{item.toUpperCase()}}
          </label>
        </li>
      </ul>
    </div>
    <div class="ringtone-list-container">
      <div class="ringtone-title">
        <span>WORK</span>
      </div>
      <ul class="ringtone-list-wrapper">
        <li class="ringtones" v-for="(item, key) in audioPlayer" :key="key">
          <input class="ringtone-selector" :value="item"
           :id="`b-${item}`" name="ringtone-break" type="radio" />
          <label class="ringtone-text" :for="`b-${item}`">
            <span></span>
            {{item.toUpperCase()}}
          </label>
        </li>
      </ul>
    </div>
    <audio  data-key="alert" src="../assets/media/alert.mp3"></audio>
    <audio  data-key="bird" src="../assets/media/bird.mp3"></audio>
    <audio  data-key="drop" src="../assets/media/drop.mp3"></audio>
    <audio  data-key="ring" src="../assets/media/ring.mp3"></audio>
    <audio  data-key="default" src="../assets/media/default.mp3"></audio>
    <audio  data-key="beep" src="../assets/media/beep.mp3"></audio>
    <audio  data-key="bugle" src="../assets/media/bugle.mp3"></audio>
    <audio  data-key="horn" src="../assets/media/horn.mp3"></audio>
    <audio  data-key="warning" src="../assets/media/warning.mp3"></audio>
    <audio  data-key="alarm" src="../assets/media/alarm.mp3"></audio>
    <audio  data-key="bell" src="../assets/media/bell.mp3"></audio>
    <audio  data-key="digital" src="../assets/media/digital.mp3"></audio>
    <audio  data-key="music" src="../assets/media/music.mp3"></audio>
    <audio  data-key="whistle" src="../assets/media/whistle.mp3"></audio>
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
    playSound(el) {
      const vm = this;
      if (el !== 'none') {
        const sound = document.querySelector(`audio[data-key = "${el}"]`);
        vm.audio = new Audio(`../assets/media/${el}.mp3`);
        sound.addEventListener('click', vm.play());
      }
    },
    play() {
      this.audio.play();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/ringtone.scss";
</style>
