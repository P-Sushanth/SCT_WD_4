const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (!text) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const taskHeader = document.createElement("div");
  taskHeader.className = "task-header";

  const taskText = document.createElement("span");
  taskText.textContent = `${text} ${date ? "| " + date : ""} ${time ? "| " + time : ""}`;
  taskText.className = "task-text";

  const btnGroup = document.createElement("div");
  btnGroup.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTask(taskText, li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  taskHeader.appendChild(taskText);
  taskHeader.appendChild(btnGroup);
  li.appendChild(taskHeader);
  taskList.appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
}

function editTask(taskSpan, li) {
  const currentText = taskSpan.textContent;
  const newText = prompt("Edit your task:", currentText);
  if (newText !== null && newText.trim() !== "") {
    taskSpan.textContent = newText.trim();
  }
}
