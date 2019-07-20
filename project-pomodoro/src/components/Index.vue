<template>
  <div>
    <Menu v-if="isGoMenu" @emitGoMenu="goMenu" @emitStartCountdown="startCountdown"
    :timeData="timer"/>
    <div class="pomodoro-container page-index" v-else>
      <main>
        <div class="main-container" :class="{'bg-lighten-secondary':timer.mode === 2}">
          <form class="mission-input-container">
            <input class="mission-input" type="text" v-model="newMission"
            :class="{'font-color-secondary':timer.mode === 2}"
            placeholder="ADD A NEW MISSION…" @keyup:enter.prevent="addMission"/>
            <button class="btn-add-mission" @click.prevent="addMission"
            :class="{'font-color-secondary btnSecondHover':timer.mode === 2}">+</button>
          </form>
          <div class="countdown-number" :class="{'font-color-secondary':timer.mode === 2}"
          >{{timer.showTime}}</div>
          <div class="mission-list-container">
            <div class="doing-mission">
                <li class="missions reset-doingMission-height">
                  <input class="mission-selector" id="doingMission" name="mission-selector"
                  type="checkbox" v-if="doingMission"/>
                  <label class="mission-text reset-mission-text" for="doingMission"
                  @click="deleteDoingMission(doingMission[0])" v-if="doingMission[0]">
                    <span class="fake-checkbox-lg"></span>
                    {{doingMission[0].missionTitle}}
                  </label>
                  <label class="mission-text reset-mission-text" v-if="!doingMission[0]">
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
                    @click.prevent="addToDoing(item)"></a>
                  </div>
                </li>
              </draggable>
              <li>
                <a :class="{'font-color-secondary btn-link-secondary':timer.mode === 2}"
                class="btn-link-primary" @click.prevent="goMenu" href="#">
                  MORE
                </a>
              </li>
            </ul>
          </div>
          <div class="countdown-clock-container">
            <div class="clock-surface" :class="{'bg-secondary':timer.mode === 2}">
              <a href="#" @click.prevent="startCountdown" v-if="!timer.isCounted"
              class="btn-control btn-play" :class="{'btn-secondary-play':timer.mode === 2}"></a>
              <a href="#" @click.prevent="startCountdown" v-else
              class="btn-control btn-pause" :class="{'btn-secondary-pause':timer.mode === 2}"></a>
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
                <a class="btn-menu btn-light-list" href="#"
                @click.prevent="goMenu"></a>
              </li>
              <li>
                <a class="btn-menu btn-light-analytics"
                @click.prevent="goMenu('analytics')" href="#"></a>
              </li>
              <li>
                <a class="btn-menu btn-light-ringtone"
                @click.prevent="goMenu('ringtone')" href="#"></a>
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
import Menu from './Menu.vue';

export default {
  data() {
    return {
      isGoMenu: false,
      timer: {
        showTime: '25:00',
        currentTime: 2,
        breakTime: 5,
        isCounted: false,
        controll: null,
        mode: 1,
        toggleMode: false,
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
    deleteDoingMission(el) {
      this.$store.dispatch('deleteDoingMission', el);
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
    addToDoing(el) {
      this.$store.dispatch('addToDoing', el);
    },
    goMenu(el) {
      const vm = this;
      if (el) {
        vm.$router.push(`${el}`);
      }
      vm.isGoMenu = !vm.isGoMenu;
    },
    startCountdown() {
      const vm = this;
      // 假如是倒數狀態
      if (!vm.doingMission[0]) {
        // eslint-disable-next-line
        alert('請先輸入要做的事');
        return;
      }
      vm.timer.isCounted = !vm.timer.isCounted; // 點擊切換計時狀態 false: 停止
      if (vm.timer.isCounted && vm.doingMission) {
        vm.timer.controll = setInterval(() => {
          if (vm.timer.currentTime === 0) {
            vm.timer.currentTime = vm.timer.breakTime;
            vm.timer.isCounted = !vm.timer.isCounted;
            vm.timer.mode += 1;
            clearInterval(vm.timer.controll);
            if (vm.timer.mode === 3) {
              vm.timer.mode = 1;
              clearInterval(vm.timer.controll);
              vm.deleteDoingMission(vm.doingMission[0]);
              return;
            }
          }
          vm.timer.currentTime -= 1;
          const min = Math.floor(vm.timer.currentTime / 60);
          const sec = vm.timer.currentTime % 60;
          vm.timer.showTime = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
        }, 1000);
      } else { // 非倒數狀態
        // 清除timer.controll的計時
        clearInterval(vm.timer.controll);
      }
    },
  },
  components: {
    draggable,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/index.scss";
</style>
