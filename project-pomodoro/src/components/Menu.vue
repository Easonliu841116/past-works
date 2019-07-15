<template>
  <div>
    <div class="pomodoro-container page-menu">
      <main>
        <div class="main-container">
          <ul class="menu-list-group">
            <li>
              <router-link :to="{ name:'TodoList' }" class="btn-link">
                <span class="btn-muted-list"></span>
                &nbsp;TO-DO LIST
              </router-link>
            </li>
            <li>
              <router-link :to="{ name:'Analytics' }" class="btn-link">
                <span class="btn-muted-analytics"></span>
                &nbsp;ANALYTICS
              </router-link>
            </li>
            <li>
              <router-link :to="{ name:'Ringtone' }" class="btn-link">
                <span class="btn-muted-ringtone"></span>
                &nbsp;RINGTONES
              </router-link>
            </li>
          </ul>
          <div class="countdown-clock-container">
            <ul class="countdown-clock-wrapper">
              <li>
                <div class="btn-play-bg">
                  <div class="btn-control-container">
                    <a class="btn-controller btn-play" href="#" v-if="timer.isPaused"
                    @click.prevent="countDown"></a>
                    <a class="btn-controller btn-pause" href="#" v-else
                    @click.prevent="countDown"></a>
                  </div>
                </div>
              </li>
              <li class="countdown-number">{{timer.leftTime}}</li>
              <li class="mission-text">THE SECOND THING TODAY</li>
            </ul>
          </div>
        </div>
      </main>
      <router-view class="menu-view"/>
      <aside>
        <div class="aside-container">
          <div class="btn-back">
            <router-link :to="{ name:'Index' }">×</router-link>
          </div>
          <h1 class="logo">
            <a href="#" @click.prevent>POMODORO</a>
          </h1>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
// import { mapFields } from 'vuex-map-fields';
import { mapGetters } from 'vuex';
// import $ from 'jquery';

export default {
  data() {
    return {
      isCounted: false,
    };
  },
  computed: {
    ...mapGetters([
      'timer',
    ]),
  },
  methods: {
    countDown() {
      const vm = this;
      console.log(vm.timer.isPaused, vm.isCounted);
      if (vm.timer.isPaused && !vm.isCounted) {
        if (vm.timer.isPaused) {
          setInterval(() => {
            vm.$store.dispatch('countDown');
            console.log(vm.timer.isPaused, vm.isCounted);
          }, 1000);
        }
        vm.$store.dispatch('pauseCount');
        vm.isCounted = true;
      } else if (!vm.timer.isPaused && vm.isCounted) {
        vm.$store.dispatch('pauseCount');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/menu.scss";
</style>
