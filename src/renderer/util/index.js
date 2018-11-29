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
export const test = () => {};
