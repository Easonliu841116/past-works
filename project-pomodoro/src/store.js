import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    newMission: '',
    missions: [],
    tempMissions: [],
    cacheMission: {},
    doingMission: [],
    cacheMissionTitle: '',
    alertSound: {
      workAlert: 'default',
      breakAlert: 'default',
    },
    pomodoroQty: 0,
  },
  getters: {
    missions(state) {
      return state.missions;
    },
    cacheMissionTitle(state) {
      return state.cacheMissionTitle;
    },
    cacheMission(state) {
      return state.cacheMission;
    },
    doingMission(state) {
      return state.doingMission;
    },
    getField,
  },
  mutations: {
    MISSION(state) {
      const value = state.newMission.trim();
      if (value) {
        const obj = {
          missionTitle: value,
          id: Math.floor(Date.now()),
          completed: false,
          pomodoros: 0,
        };
        state.missions.push(obj);
      }
      state.newMission = '';
    },
    COMPLETED(state, payload) {
      payload.completed = !payload.completed;
    },
    DELETEDOINGMISSION(state, payload) {
      payload.completed = true;
      state.missions.push(payload);
      state.doingMission.splice(0, 1);
    },
    DELETEMISSION(state, payload) {
      let deleteId = '';
      state.missions.forEach((el, key) => {
        if (payload.id === el.id) {
          deleteId = key;
        }
        return deleteId;
      });
      state.missions.splice(deleteId, 1);
    },
    EDITMISSION(state, payload) {
      state.cacheMission = payload;
      state.cacheMissionTitle = payload.missionTitle;
    },
    FINISHEDIT(state, payload) {
      payload.missionTitle = state.cacheMissionTitle;
      state.cacheMission = {};
      state.cacheMissionTitle = '';
    },
    DOINGMISSION(state, payload) {
      let deleteId = '';
      state.missions.forEach((el, key) => {
        if (payload.id === el.id) {
          deleteId = key;
        }
        return deleteId;
      });
      state.missions.splice(deleteId, 1);
      state.doingMission.push(payload);
    },
    COUNTCONTROLLER(state) {
      state.timer.isPaused = !state.timer.isPaused;
    },
    SOUND(state, { el, type }) {
      if (type === 1) {
        state.alertSound.workAlert = el;
      }
      if (type === 2) {
        state.alertSound.breakAlert = el;
      }
    },
    POMODORO(state, payload) {
      payload.pomodoros += 1;
      state.pomodoroQty += 1;
    },
    updateField,
  },
  actions: {
    addMission(context) {
      context.commit('MISSION');
    },
    toggleCompleted(context, payload) {
      context.commit('COMPLETED', payload);
    },
    deleteDoingMission(context, payload) {
      context.commit('DELETEDOINGMISSION', payload);
    },
    deleteMission(context, payload) {
      context.commit('DELETEMISSION', payload);
    },
    editMission(context, payload) {
      setTimeout(() => {
        context.commit('EDITMISSION', payload);
      }, 1);
    },
    finishEdit(context, payload) {
      context.commit('FINISHEDIT', payload);
    },
    addToDoing(context, payload) {
      context.commit('DOINGMISSION', payload);
    },
    changeSound(context, { el, type }) {
      context.commit('SOUND', { el, type });
    },
    addPomodoro(context, payload) {
      context.commit('POMODORO', payload);
    },
  },
});
