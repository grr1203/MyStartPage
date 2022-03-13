function todo() {
  const toDoForm = document.querySelector("#todo-form");
  const toDoList = document.querySelector("#todo-list");
  const toDoInput = toDoForm.querySelector("input");

  let toDos = [];

  function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    span.innerText = "✔\u00A0\u00A0" + newToDo.todo;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }

  function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }

  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
      id: Date.now(),
      todo: newToDo,
    };
    toDos.push(newToDoObj);
    saveToDos();
    paintToDo(newToDoObj);
  }

  toDoForm.addEventListener("submit", handleToDoSubmit);

  const TODOS_KEY = "todos";
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
  }
}

export default todo;
