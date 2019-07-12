<template>
  <div>
    <form class="mission-input-container">
      <input
        v-model="newMission"
        type="text"
        class="mission-input"
        placeholder="ADD A NEW MISSION…"
        @keyup:enter.prevent="addMission"
      />
      <button class="btn-add-mission" @click.prevent="addMission">+</button>
    </form>
    <ul class="mission-list-container">
      <li class="mission-title">
        <span>TO-DO</span>
        <a href="#" @click.prevent="todoMissionDropToggle"
        class="btn-dropdown" id="btn-todo-dropdown"></a>
      </li>
      <div id="todo-missions">
        <li class="missions" v-for="(item, key) in missions" :key="key" v-show="!item.completed">
          <input class="mission-selector" :id="item.id" name="mission-selector"
          type="checkbox"/>
          <label class="mission-text" :for="item.id"
          :class="{'line-through':item.completed}" @click="toggleComplete(item)">
            <span></span>
            {{item.missionTitle}}
          </label>
          <div class="btn-group">
            <a href="#" class="btn-edit mission-btn" @click.prevent></a>
            <a href="#" class="btn-delete mission-btn" @click.prevent="deleteMission(item)">×</a>
            <a href="#" class="btn-start-count mission-btn" @click.prevent></a>
          </div>
        </li>
      </div>
    </ul>
    <ul class="mission-list-container">
      <li class="mission-title">
        <span>DONE</span>
        <a href="#" @click.prevent="doneMissionDropToggle"
        class="btn-dropdown" id="btn-done-dropdown"></a>
      </li>
      <div id="done-missions">
        <li class="missions" v-for="(item, key) in missions" :key="key" v-show="item.completed">
          <input class="mission-selector" :id="item.id" name="mission-selector"
          type="checkbox"/>
          <label class="mission-text" :for="item.id"
          :class="{'line-through':item.completed}" @click="toggleComplete(item)">
            <span :class="{'fake-checked': item.completed === true}"></span>
            {{item.missionTitle}}
          </label>
          <div class="btn-group">
            <a href="#" class="btn-edit mission-btn" @click.prevent></a>
            <a href="#" class="btn-delete mission-btn" @click.prevent="deleteMission(item)">×</a>
            <a href="#" class="btn-start-count mission-btn" @click.prevent></a>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';

export default {
  computed: {
    ...mapFields([
      'newMission',
    ]),
    ...mapGetters([
      'missions',
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
    todoMissionDropToggle() {
      $('#todo-missions').fadeToggle();
      $('#btn-todo-dropdown').toggleClass('turn-opposite');
    },
    doneMissionDropToggle() {
      $('#done-missions').fadeToggle();
      $('#btn-done-dropdown').toggleClass('turn-opposite');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/todolist.scss";
</style>
