<template>
  <div>
    <form class="mission-input-container">
      <input
        v-model="newMission"
        type="text"
        class="mission-input"
        :class="{'font-color-secondary':subTimeData.mode === 2}"
        placeholder="ADD A NEW MISSION…"
        @keyup:enter.prevent="addMission"
      />
      <button class="btn-add-mission" @click.prevent="addMission"
      :class="{'font-color-secondary btnSecondHover':subTimeData.mode === 2}">+</button>
    </form>
    <ul class="mission-list-container">
      <li class="mission-title">
        <span>TO-DO</span>
        <a href="#" @click.prevent="todoMissionDropToggle"
        class="btn-dropdown" id="btn-todo-dropdown"></a>
      </li>
      <div id="todo-missions">
        <draggable v-model="missions" handle=".btn-drag">
          <li class="missions" v-for="(item, key) in missions" :key="key" v-show="!item.completed">
            <input class="mission-selector" :id="item.id" name="mission-selector"
            type="checkbox"/>
            <label class="mission-text" :for="item.id" v-if="item.id !== cacheMission.id"
            :class="{'line-through':item.completed}" @click="toggleComplete(item)">
              <span></span>
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
      </div>
    </ul>
    <ul class="mission-list-container">
      <li class="mission-title">
        <span>DONE</span>
        <a href="#" @click.prevent="doneMissionDropToggle"
        class="btn-dropdown" id="btn-done-dropdown"></a>
      </li>
      <div id="done-missions">
        <draggable v-model="missions" handle=".btn-drag">
          <li class="missions"
            v-for="(item, key) in missions" :key="key" v-show="item.completed">
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
            <div>
              <div class="pomodoro-qty" v-for="(el, key) in item.pomodoros" :key="key">
                  {{item.pomodoros}}
              </div>
            </div>
          </li>
        </draggable>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import $ from 'jquery';
import draggable from 'vuedraggable';

export default {
  props: {
    subTimeData: {
      type: Object,
      default() {
        return {};
      },
    },
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
    // addToDoing(el) {
    //   this.$store.dispatch('addToDoing', el);
    // },
    addToDoing(el) {
      this.$bus.$emit('addToDoing', el);
    },
  },
  components: {
    draggable,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
@import "../assets/scss/todolist.scss";
</style>
