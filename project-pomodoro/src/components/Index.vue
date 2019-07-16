<template>
  <div>
    <div class="pomodoro-container page-index">
      <main>
        <div class="main-container">
          <!-- mission-input -->
          <form class="mission-input-container">
            <input class="mission-input" type="text" v-model="newMission"
            placeholder="ADD A NEW MISSION…" @keyup:enter.prevent="addMission"/>
            <button class="btn-add-mission" @click.prevent="addMission">+</button>
          </form>
          <!-- countdown-number -->
          <div class="countdown-number">25:00</div>
          <!-- mission-list -->
          <ul class="mission-list-container">
            <div id="done-missions">
              <draggable v-model="missions" handle=".btn-drag">
                <li class="missions" v-for="(item, key) in missions.slice(0,3)"
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
                <li>
                  <router-link class="btn-link-primary" :to="{ name:'TodoList' }">
                    MORE
                  </router-link>
                </li>
              </draggable>
            </div>
          </ul>
          <!-- countdown-clock -->
          <div class="countdown-clock-container">
            <div class="clock-surface">
              <a href="#" @click.prevent class="btn-play"></a>
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
              <a href="#" @click.prevent>POMODORO</a>
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
