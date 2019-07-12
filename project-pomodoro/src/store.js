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
  },
  getters: {
    missions(state) {
      return state.missions;
    },
    cacheMissionTitle(state) {
      return state.cacheMissionTitle;
    },
    isEdit(state) {
      return state.isEdit;
    },
    cacheMission(state) {
      return state.cacheMission;
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
  },
});
