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
      // let countTime;
      // if (state.timer.timerMode === 0) {
      //   countTime = state.timer.workTime;
      // } else if (state.timer.timerMode === 1) {
      //   countTime = state.timer.breakTime;
      // }
      state.timer.workTime -= 1;
      const min = Math.floor(state.timer.workTime / 60);
      const sec = state.timer.workTime % 60;
      state.timer.leftTime = `${min}:${sec < 10 ? '0' : ''}${sec}`;
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
    countDown(context) {
      context.commit('TIMER');
    },
    pauseCount(context) {
      context.commit('COUNTCONTROLLER');
    },
  },
});
