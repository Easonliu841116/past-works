<template>
  <div>
    <div class="pomodoro-container page-index">
      <main>
        <div class="main-container">
          <form class="mission-input-container">
            <input class="mission-input" type="text" v-model="newMission"
            placeholder="ADD A NEW MISSION…" @keyup:enter.prevent="addMission"/>
            <button class="btn-add-mission" @click.prevent="addMission">+</button>
          </form>
          <div class="countdown-number">{{showTime}}</div>
          <div class="mission-list-container">
            <div class="doing-mission">
                <li class="missions reset-doingMission-height">
                  <input class="mission-selector" id="doingMission" name="mission-selector"
                  type="checkbox" v-if="doingMission"/>
                  <label class="mission-text reset-mission-text" for="doingMission"
                  @click="deleteDoingMission" v-if="doingMission">
                    <span class="fake-checkbox-lg"></span>
                    {{doingMission}}
                  </label>
                  <label class="mission-text reset-mission-text" v-if="!doingMission">
                    請先新增要做的事
                  </label>
                </li>
            </div>
            <ul>
              <draggable v-model="missions" handle=".btn-drag">
                <li class="missions" v-for="(item, key) in missions.slice(0,3)"
                  v-show="!item.completed"
                  :key="key">
                  <input class="mission-selector" :id="item.id" name="mission-selector"
                  type="checkbox"/>
                  <label class="mission-text" :for="item.id" v-if="item.id !== cacheMission.id"
                  :class="{'line-through':item.completed}" @click="toggleComplete(item)">
                    <span :class="{'fake-checked': item.completed === true}"></span>
                    {{item.missionTitle}}
                  </label>
                  <div v-if="item.id === cacheMission.id">
                    <input class="btn-missionEdit" type="text" v-model="cacheMissionTitle"
                    @blur="finishEdit(item)"/>
                    <span class="edit-hint">點擊周遭完成編輯</span>
                  </div>
                  <div class="btn-group">
                    <a href="#" class="btn-drag mission-btn btn-hide"
                    @click.prevent></a>
                    <a href="#" class="btn-edit mission-btn btn-hide"
                    @click.prevent="editMission(item)"></a>
                    <a href="#" class="btn-delete mission-btn btn-hide"
                    @click.prevent="deleteMission(item)">×</a>
                    <a href="#" class="btn-start-count mission-btn"
                    @click.prevent="addToTimer(item)"></a>
                  </div>
                </li>
              </draggable>
              <li>
                <router-link class="btn-link-primary" :to="{ name:'TodoList' }">
                  MORE
                </router-link>
              </li>
            </ul>
          </div>
          <div class="countdown-clock-container">
            <div class="clock-surface">
              <a href="#" @click.prevent="startCountdown" v-if="!timer.isCounted"
              class="btn-control btn-play"></a>
              <a href="#" @click.prevent="startCountdown" v-else
              class="btn-control btn-pause"></a>
              <a href="#" @click.prevent class="btn-stop"></a>
            </div>
            <div class="clock-back"></div>
          </div>
        </div>
      </main>
      <aside>
        <div class="aside-container">
          <div class="menu-container">
            <ul class="btn-menu-group">
              <li>
                <router-link class="btn-menu btn-light-list"
                :to="{ name:'TodoList' }"></router-link>
              </li>
              <li>
                <router-link class="btn-menu btn-light-analytics"
                :to="{ name:'Analytics' }"></router-link>
              </li>
              <li>
                <router-link class="btn-menu btn-light-ringtone"
                :to="{ name:'Ringtone' }"></router-link>
              </li>
            </ul>
            <h1 class="logo">
              POMODORO
            </h1>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import draggable from 'vuedraggable';
import $ from 'jquery';

export default {
  data() {
    return {
      showTime: '25:00',
      timer: {
        workTime: 1500,
        isCounted: false,
        controll: null,
      },
    };
  },
  computed: {
    ...mapFields([
      'newMission',
      'cacheMission',
      'cacheMissionTitle',
      'missions',
      'doingMission',
    ]),
  },
  methods: {
    ...mapActions([
      'addMission',
    ]),
    toggleComplete(el) {
      this.$store.dispatch('toggleCompleted', el);
    },
    deleteDoingMission() {
      this.$store.dispatch('deleteDoingMission');
    },
    deleteMission(el) {
      this.$store.dispatch('deleteMission', el);
    },
    editMission(el) {
      this.$store.dispatch('editMission', el);
      setTimeout(() => {
        $('.btn-missionEdit').focus();
      }, 2);
    },
    finishEdit(el) {
      this.$store.dispatch('finishEdit', el);
    },
    todoMissionDropToggle() {
      $('#todo-missions').fadeToggle();
      $('#btn-todo-dropdown').toggleClass('turn-opposite');
    },
    doneMissionDropToggle() {
      $('#done-missions').fadeToggle();
      $('#btn-done-dropdown').toggleClass('turn-opposite');
    },
    addToTimer(el) {
      this.$store.dispatch('addToTimer', el);
    },
    startCountdown() {
      const vm = this;
      // 假如是倒數狀態
      if (!vm.doingMission) {
        // eslint-disable-next-line
        alert('請先輸入要做的事');
        return;
      }
      vm.timer.isCounted = !vm.timer.isCounted; // 點擊切換計時狀態 false: 停止
      if (vm.timer.isCounted && vm.doingMission) {
      // 讓timer.controll進行倒數
        vm.timer.controll = setInterval(() => {
          vm.timer.workTime -= 1;
          const min = Math.floor(vm.timer.workTime / 60);
          const sec = vm.timer.workTime % 60;
          vm.showTime = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }, 1000);
      } else { // 非倒數狀態
        // 清除timer.controll的計時
        clearInterval(vm.timer.controll);
      }
    },
  },
  components: {
    draggable,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/index.scss";
</style>
