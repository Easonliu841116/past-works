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
                    @click.prevent="toggleCount()"></a>
                    <a class="btn-controller btn-pause" href="#" v-else
                    @click.prevent="toggleCount()"></a>
                  </div>
                </div>
              </li>
              <li class="countdown-number">{{timer.leftTime}}</li>
              <li class="mission-text">{{doingMission}}</li>
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
      controller: null,
      isPaused: true,
    };
  },
  computed: {
    ...mapGetters([
      'timer',
      'doingMission',
    ]),
  },
  methods: {
    toggleCount() {
      const vm = this;
      this.$store.dispatch('toggleCount'); // 切換 vm.isPaused，isPaused預設 = true;
      if (!vm.timer.isPause) {
        clearInterval(vm.controller);
        vm.controller = setInterval(() => {
          this.$store.dispatch('startCount'); // 單純做表示畫面
        }, 1000);
      } else {
        clearInterval(vm.controller);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/menu.scss";
</style>
