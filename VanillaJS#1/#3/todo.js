const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // ← HTML은 JS의 값을 알아듣지못하므로, JS의 값을 HTML이 알아들을 수 있는 string으로 바꿔주기 위하여 JSON.stringify를 쓴다.
  // JSON = JavaScript Object Notation
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text; // ← 이 function의 () 입력값.
  li.appendChild(delBtn); // ← ()의 값을 li의 father element 안에 집어넣음.
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // ← 이렇게 push를 써서 array안에 element를 집어넣을 수 있다.
  saveToDos();
}
// ↑↑↑↑ 평소에 하던 HTML상에서 가져오는것이 아닌 JS상에서 만들어내는것!

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
    // ← forEach는 함수를 실행시킬 때 array안에 담겨있는 모든 요소들을 한번씩 적용시켜서 작동시킴.
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
