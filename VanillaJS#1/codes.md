# Vanilla Java Script Codes
# HTML
    <!DOCTYPE html>
    <html>
      <head>
        <title>Something</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div class="js-clock">
          <h1>00:00</h1>
        </div>
        <form class="js-form form">
          <input type="text" placeholder="What is your    name?" />
        </form>
        <h4 class="js-greetings greetings"></h4>
        <form class="js-toDoForm">
          <input type="text" placeholder="Write a to do"    />
        </form>
        <ul class="js-toDoList"></ul>
        <script src="clock.js"></script>
        <script src="gretting.js"></script>
        <script src="todo.js"></script>
      </body>
    </html>

---
---
---

# Java Script
## gretting.js

    const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

    const USER_LS = "currentUser",
      SHOWING_CN = "showing";

    function saveName(text) {
      localStorage.setItem(USER_LS, text);
    }

    function handleSubmit(event) {
      event.preventDefault();
      const currentValue = input.value;
      paintGreeting(currentValue);
      saveName(currentValue);
    }

    function askForName() {
      form.classList.add(SHOWING_CN);
      form.addEventListener("submit", handleSubmit);
    }

    function paintGreeting(text) {
      form.classList.remove(SHOWING_CN);
      greeting.classList.add(SHOWING_CN);
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

---

## clock.js

    const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

    function getTime() {
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const seconds = date.getSeconds();
      clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`; 
    }

    function init() {
      getTime();
      setInterval(getTime, 1000);
    }

    init();
