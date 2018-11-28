import Vue from 'vue';

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
  Object.keys(payload).forEach((it) => {
    st[it] = payload[it];
  });
};

export const initState = () => {
  const list = JSON.parse(window.localStorage.getItem('electron-vue-todolist'));
  updateState({
    list,
  });
};
