// const taskInput = document.getElementById("new-task");
// const addButton = document.querySelector(".task-add__button--add");
// const incompleteTaskHolder = document.getElementById("incomplete-tasks");
// const completedTasksHolder = document.getElementById("completed-tasks");

// // new task list item
// const createNewTaskElement = (taskString) => {
//   const listItem = document.createElement("li");
//   listItem.className = "task";

//   //  elements
//   const checkBox = document.createElement("input");
//   const label = document.createElement("label");
//   const editInput = document.createElement("input");
//   const editButton = document.createElement("button");
//   const deleteButton = document.createElement("button");
//   const deleteButtonImg = document.createElement("img");

//   // configure elements
//   checkBox.type = "checkbox";
//   checkBox.className = "task__checkbox";

//   label.innerText = taskString;
//   label.className = "task__label";

//   editInput.type = "text";
//   editInput.className = "task__input";

//   editButton.innerText = "edit";
//   editButton.type = "button";
//   editButton.className = "task__button task__button--edit";

//   deleteButton.type = "button";
//   deleteButton.className = "task__button task__button--delete";
//   deleteButtonImg.src = "./remove.svg";
//   deleteButtonImg.alt = "delete task";
//   deleteButtonImg.className = "task__button-image";
//   deleteButton.appendChild(deleteButtonImg);

//   // append elements
//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

//   return listItem;
// };

// // add a task
// const addTask = () => {
//   if (!taskInput.value.trim()) return;

//   const listItem = createNewTaskElement(taskInput.value.trim());
//   incompleteTaskHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);

//   taskInput.value = "";
// };

// // edit an existing task
// const editTask = function () {
//   const listItem = this.parentNode;
//   const editInput = listItem.querySelector(".task__input");
//   const label = listItem.querySelector(".task__label");
//   const editButton = listItem.querySelector(".task__button--edit");
//   const isEditMode = listItem.classList.contains("edit__mode");

//   if (isEditMode) {
//     label.innerText = editInput.value.trim() || label.innerText;
//     editButton.innerText = "edit";
//   } else {
//     editInput.value = label.innerText;
//     editButton.innerText = "save";
//   }

//   listItem.classList.toggle("edit__mode");
// };

// // delete a task
// const deleteTask = function () {
//   const listItem = this.parentNode;
//   const ul = listItem.parentNode;
//   ul.removeChild(listItem);
// };

// // task as completed
// const taskCompleted = function () {
//   const listItem = this.parentNode;
//   completedTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskIncomplete);
// };

// // task as incomplete
// const taskIncomplete = function () {
//   const listItem = this.parentNode;
//   incompleteTaskHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
// };

// // bind events to task elements
// const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
//   const checkBox = taskListItem.querySelector(".task__checkbox");
//   const editButton = taskListItem.querySelector(".task__button--edit");
//   const deleteButton = taskListItem.querySelector(".task__button--delete");

//   if (checkBox) checkBox.onchange = checkBoxEventHandler;
//   if (editButton) editButton.onclick = editTask;
//   if (deleteButton) deleteButton.onclick = deleteTask;
// };

// addButton.addEventListener("click", addTask);

// [...incompleteTaskHolder.children].forEach((task) => {
//   bindTaskEvents(task, taskCompleted);
// });

// [...completedTasksHolder.children].forEach((task) => {
//   bindTaskEvents(task, taskIncomplete);
// });

const taskInput = document.getElementById("new-task");
const addButton = document.querySelector(".task-add__button--add");
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");

// new task list item
const createNewTaskElement = (taskString) => {
  const listItem = document.createElement("li");
  listItem.className = "task";

  // elements
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const editInput = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const deleteButtonImg = document.createElement("img");

  // configure elements
  checkBox.type = "checkbox";
  checkBox.className = "task__checkbox";

  label.innerText = taskString;
  label.className = "task__label";

  editInput.type = "text";
  editInput.className = "task__input";

  editButton.innerText = "edit";
  editButton.type = "button";
  editButton.className = "task__button task__button--edit";

  deleteButton.type = "button";
  deleteButton.className = "task__button task__button--delete";
  deleteButtonImg.src = "./remove.svg";
  deleteButtonImg.alt = "delete task";
  deleteButtonImg.className = "task__button-image";
  deleteButton.appendChild(deleteButtonImg);

  // append elements
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

// add a task
const addTask = () => {
  if (!taskInput.value.trim()) return;

  const listItem = createNewTaskElement(taskInput.value.trim());
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
};

// edit an existing task
const editTask = function () {
  const listItem = this.parentNode;
  const editInput = listItem.querySelector(".task__input");
  const label = listItem.querySelector(".task__label");
  const editButton = listItem.querySelector(".task__button--edit");
  const isEditMode = listItem.classList.contains("edit__mode");

  if (isEditMode) {
    label.innerText = editInput.value.trim() || label.innerText;
    editButton.innerText = "edit";
  } else {
    editInput.value = label.innerText;
    editButton.innerText = "save";
  }

  listItem.classList.toggle("edit__mode");
};

// delete a task
const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
};

// task as completed
const taskCompleted = function () {
  const listItem = this.parentNode;
  listItem.classList.add("task--completed"); // Add completed class
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

// task as incomplete
const taskIncomplete = function () {
  const listItem = this.parentNode;
  listItem.classList.remove("task--completed"); // Remove completed class
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

// bind events to task elements
const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
  const checkBox = taskListItem.querySelector(".task__checkbox");
  const editButton = taskListItem.querySelector(".task__button--edit");
  const deleteButton = taskListItem.querySelector(".task__button--delete");

  if (checkBox) checkBox.onchange = checkBoxEventHandler;
  if (editButton) editButton.onclick = editTask;
  if (deleteButton) deleteButton.onclick = deleteTask;
};

addButton.addEventListener("click", addTask);

[...incompleteTaskHolder.children].forEach((task) => {
  bindTaskEvents(task, taskCompleted);
});

[...completedTasksHolder.children].forEach((task) => {
  bindTaskEvents(task, taskIncomplete);
});
