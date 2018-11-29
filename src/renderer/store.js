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
  Object.keys(payload)
    .forEach((it) => {
      st[it] = payload[it];
    });
};

export const initState = () => {
  const list = JSON.parse(window.localStorage.getItem('electron-vue-todolist'));
  updateState({
    list,
  });
};

export const setLocalList = () => {
  window.localStorage.setItem('electron-vue-todolist', JSON.stringify(st.list));
};

export const updateListItem = (payload) => {
  const { list } = st;
  list.forEach((item) => {
    if (item.id === payload.id) {
      item.content = payload.content;
    }
  });
  st.list = list;
  setLocalList();
};

export const addListItem = (payload) => {
  const { list } = st;
  const ids = list.map(item => item.id);
  const maxId = Math.max(ids);
  const item = {
    id: maxId + 1,
    content: payload.content,
  };
  list.unshift(item);
  st.list = list;
  setLocalList();
};
