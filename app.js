// const testNum = [1, 2, 3, 4, 5];

// let result;

// result = testNum.reduce((acc, cur, i, ele) => {
//   console.log(ele);
//   console.log(i);

//   return acc + cur;
// });

// console.log(result);

const toggleBtn = document.querySelector(".header__toggleBtn");
const menu = document.querySelector("nav");
const sns = document.querySelector(".header__sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("act"); // 마우스를 클릭했을 때 menu와 sns의 클래스가 active가 있다면 빼주고 없다면 넣어준다.
  sns.classList.toggle("act");
});
