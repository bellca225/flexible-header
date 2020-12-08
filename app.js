const toggleBtn = document.querySelector(".header__toggleBtn");
const menu = document.querySelector("nav");
const sns = document.querySelector(".header__sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("act"); // 마우스를 클릭했을 때 menu와 sns의 클래스가 active가 있다면 빼주고 없다면 넣어준다.
  sns.classList.toggle("act");
});
