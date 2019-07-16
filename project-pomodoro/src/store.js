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
    doingMission: '' || 'POMODORO',
    cacheMissionTitle: '',
    timer: {
      timerMode: 0,
      workTime: 1500,
      breakTime: 300,
      leftTime: '25:00',
      isPaused: true,
    },
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
    timer(state) {
      return state.timer;
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
        };
        state.missions.push(obj);
      }
      state.newMission = '';
    },
    COMPLETED(state, payload) {
      payload.completed = !payload.completed;
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
    TIMER(state) {
      state.timer.workTime -= 1;
      const min = Math.floor(state.timer.workTime / 60);
      const sec = state.timer.workTime % 60;
      state.timer.leftTime = `${min}:${sec < 10 ? '0' : ''}${sec}`;
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
      state.doingMission = payload.missionTitle;
    },
    COUNTCONTROLLER(state) {
      state.timer.isPaused = !state.timer.isPaused;
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
    startCount(context, payload) {
      let count;
      const vm = this;
      if (payload && !vm.state.isPaused) {
        count = setInterval(() => {
          context.commit('TIMER');
          if (!payload && vm.state.isPaused) {
            clearInterval(count);
          }
        }, 1000);
      } else if (!payload && vm.state.isPaused) {
        context.commit('COUNTCONTROLLER');
      } else {
        count = setInterval(() => {
          context.commit('TIMER');
        }, 1000);
      }
    },
    toggleCount(context) {
      context.commit('COUNTCONTROLLER');
    },
    addToTimer(context, payload) {
      context.commit('DOINGMISSION', payload);
    },
  },
});
