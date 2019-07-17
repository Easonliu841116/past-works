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
                    <a class="btn-controller btn-play" href="#"
                    @click.prevent></a>
                    <!-- <a class="btn-controller btn-pause" href="#" v-else
                    @click.prevent="toggleCount()"></a> -->
                  </div>
                </div>
              </li>
              <li class="countdown-number">00:00</li>
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
  computed: {
    ...mapGetters([
      'doingMission',
    ]),
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/menu.scss";
</style>
