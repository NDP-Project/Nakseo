const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  // form.querySelector 인 이유는 input이 form이라는 class의 아들이기 때문에 특정하기위해 from.~ 으로 쓴것이다.
  greeting = document.querySelector(".js-greetings");
// ↑ 여기서 const로 여러가지를 선언하는것은 이후에 작성할 때 편하게 사용하기위함.(중복을 줄이기 위하여)

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); /* ← default 값으로 enter한 값을 보내고 새로고침되기때문에 그걸 막는 작업. */
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  /* SHOWING_CN과 연결된 showing이라는 class를 부여함. 이 class는 css에서 특정값이 적용됨. */
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  /* SHOWING_CN과 연결된 showing이라는 class를 부여하고 없애는 작업. */
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
