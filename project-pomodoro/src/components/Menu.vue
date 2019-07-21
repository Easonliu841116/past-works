<template>
  <div>
    <div class="pomodoro-container page-menu">
      <main>
        <div class="main-container">
          <ul class="menu-list-group">
            <li>
              <router-link :to="{ name:'TodoList' }" class="btn-link"
              :class="{'font-color-primary':this.$route.name === 'TodoList'}">
                <span :class="{'btn-primary-list':this.$route.name === 'TodoList'}"
                class="btn-muted-list"></span>
                &nbsp;TO-DO LIST
              </router-link>
            </li>
            <li>
              <router-link :to="{ name:'Analytics' }" class="btn-link"
              :class="{'font-color-primary':this.$route.name === 'Analytics'}">
                <span :class="{'btn-primary-analytics':this.$route.name === 'Analytics'}"
                class="btn-muted-analytics"></span>
                &nbsp;ANALYTICS
              </router-link>
            </li>
            <li>
              <router-link :to="{ name:'Ringtone' }" class="btn-link"
              :class="{'font-color-primary':this.$route.name === 'Ringtone'}">
                <span :class="{'btn-primary-ringtone':this.$route.name === 'Ringtone'}"
                class="btn-muted-ringtone"></span>
                &nbsp;RINGTONES
              </router-link>
            </li>
          </ul>
          <div class="countdown-clock-container">
            <ul class="countdown-clock-wrapper">
              <li>
                <div class="btn-play-bg">
                  <div class="btn-control-container"
                  :class="{'secondary-border':timeData.mode === 2}">
                    <a class="btn-controller btn-play" href="#" v-if="!timeData.isCounted"
                    @click.prevent="emitStartCountdown"
                    :class="{'btn-secondary-play':timeData.mode === 2}"></a>
                    <a class="btn-controller btn-pause" href="#" v-else
                    @click.prevent="emitStartCountdown"
                    :class="{'btn-secondary-pause':timeData.mode === 2}"></a>
                  </div>
                </div>
              </li>
              <li class="countdown-number" :class="{'font-color-secondary':timeData.mode === 2}">
                {{timeData.showTime}}
                </li>
              <li class="mission-text" v-if="doingMission[0]">
                {{doingMission[0].missionTitle}}
              </li>
              <li class="mission-text" v-else>請先新增要做的事</li>
            </ul>
          </div>
        </div>
      </main>
      <router-view class="menu-view" :subTimeData="timeData"/>
      <aside>
        <div class="aside-container">
          <div class="btn-back">
            <a href="#" @click.prevent="emitGoMenu">×</a>
          </div>
          <h1 class="logo">
            POMODORO
          </h1>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
// import { mapGetters } from 'vuex';
// import $ from 'jquery';

export default {
  props: {
    timeData: {
      type: Object,
      default() {
        return {};
      },
    },

  },
  computed: {
    ...mapFields([
      'doingMission',
    ]),
  },
  methods: {
    emitGoMenu() {
      this.$emit('emitGoMenu');
    },
    emitStartCountdown() {
      this.$emit('emitStartCountdown');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/menu.scss";
</style>
