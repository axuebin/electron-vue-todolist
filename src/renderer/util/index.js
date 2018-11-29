const colors = [
  'linear-gradient(to right, #2193b0, #6dd5ed)',
  'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
  'linear-gradient(to right, #f12711, #f5af19)',
  'linear-gradient(to right, #fc5c7d, #6a82fb)',
  'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)',
  'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)',
  'linear-gradient(to right, #11998e, #38ef7d)',
  'linear-gradient(to right, #56ccf2, #2f80ed)',
  'linear-gradient(to right, #8e2de2, #4a00e0)',
  'linear-gradient(to right, #654ea3, #eaafc8)',
  'linear-gradient(to right, #4e54c8, #8f94fb)',
  'linear-gradient(to right, #fc466b, #3f5efb)',
  'linear-gradient(to right, #ff9966, #ff5e62)',
  'linear-gradient(to right, #ee0979, #ff6a00)',
];

let lastRandomColorIndex = 0;

export const getRandomColor = () => {
  let index = Math.floor((Math.random() * colors.length) + 1) - 1;
  while (index === lastRandomColorIndex) {
    index = Math.floor((Math.random() * colors.length) + 1) - 1;
  }
  lastRandomColorIndex = index;
  return colors[index];
};

export const getArrayMax = (arr) => {
  let max = arr[0];
  const len = arr.length;
  for (let i = 1; i < len; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

export const formatDate = (timestamp) => {
  const time = new Date(timestamp);
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  return `${year}-${month}-${date}`;
};

export const fakeClick = (obj) => {
  const ev = document.createEvent('MouseEvents');
  ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  obj.dispatchEvent(ev);
};

export const exportRaw = (name, data) => {
  const urlObject = window.URL || window.webkitURL || window;
  const exportBlob = new Blob([data]);
  const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  saveLink.href = urlObject.createObjectURL(exportBlob);
  saveLink.download = name;
  fakeClick(saveLink);
};

export const download = (list) => {
  let result = 'TodoList：\n';
  list.forEach((item) => {
    result += `${formatDate(item.updatedTime || item.createdTime)}:   ${item.content}\n`;
  });
  exportRaw(`${formatDate(Date.now())}-todoList.txt`, result);
};
