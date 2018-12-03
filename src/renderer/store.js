import Vue from 'vue';
import { getArrayMax } from './util';

const app = new Vue({
  data: {
    list: [],
  },
});

const st = app.$data;

export const mapState = (keys) => {
  const res = {};
  keys.forEach((it) => {
    res[it] = () => st[it];
  });
  return res;
};

export const updateState = (payload) => {
  Object.keys(payload)
    .forEach((it) => {
      st[it] = payload[it];
    });
};

export const initState = () => {
  const list = JSON.parse(window.localStorage.getItem('electron-vue-todolist')) || [];
  updateState({
    list,
  });
};

export const setLocalList = () => {
  window.localStorage.setItem('electron-vue-todolist', JSON.stringify(st.list));
};

export const clearLocalList = () => {
  window.localStorage.removeItem('electron-vue-todolist');
  updateState({
    list: [],
  });
};

export const updateListItem = (payload) => {
  const { list } = st;
  list.forEach((item) => {
    if (item.id === payload.id) {
      item.isDone = payload.isDone;
      item.content = payload.content;
      item.updatedTime = payload.updatedTime;
    }
  });
  updateState({
    list,
  });
  setLocalList();
};

export const removeListItem = (payload) => {
  const { list } = st;
  const { id } = payload;
  list.forEach((item, index) => {
    if (item.id === id) {
      list.splice(index, 1);
    }
  });
  updateState({
    list,
  });
  setLocalList();
};

export const addListItem = (payload) => {
  const { list } = st;
  const ids = list.map(item => item.id) || [];
  const maxId = getArrayMax(ids) || 0;
  const item = {
    id: maxId + 1,
    ...payload,
  };
  list.unshift(item);
  updateState({
    list,
  });
  setLocalList();
};
