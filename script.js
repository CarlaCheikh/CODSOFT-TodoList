const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// get item from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//create a new task

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${task}
            <button class="delete-button" onclick="deleteTask(${index})">X</button>
        `;
    taskList.appendChild(li);
  });
}

// add tasks

function addTask() {
  const newTask = taskInput.value;
  if (newTask.trim() !== "") {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    taskInput.value = "";
  }
}
addButton.addEventListener("click", addTask);

renderTasks();
//delete task

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
