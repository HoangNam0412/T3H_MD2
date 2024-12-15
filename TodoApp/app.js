document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const taskInput = document.getElementById("taskInput");
  const todoList = document.getElementById("todoList");
  const deleteAllButton = document.getElementById("deleteAllButton");
  const tabs = document.querySelectorAll(".tab");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filter = "all";

  async function renderTasks() {
    todoList.innerHTML = "";
    const filteredTasks = tasks.filter(task => {
      if (filter === "all") return true;
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
    });

    filteredTasks.forEach(task => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", async () => toggleTaskCompletion(task));

      const textNode = document.createElement("span");
      textNode.textContent = task.text;
      if (task.completed) {
        textNode.style.textDecoration = "line-through";
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", async () => deleteTask(task));

      li.appendChild(checkbox);
      li.appendChild(textNode);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });

    deleteAllButton.textContent = `${filteredTasks.length} delete all`;
    deleteAllButton.disabled = filteredTasks.length === 0;
  }

  async function addTask() {
    if (taskInput.value.trim() === "") return;

    const newTask = {
      text: taskInput.value.trim(),
      completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    await saveTasks();
    renderTasks();
  }

  async function toggleTaskCompletion(task) {
    task.completed = !task.completed;
    await saveTasks();
    renderTasks();
  }

  async function deleteTask(task) {
    tasks = tasks.filter(t => t !== task);
    await saveTasks();
    renderTasks();
  }

  async function deleteAllTasks() {
    tasks = [];
    await saveTasks();
    renderTasks();
  }

  async function saveTasks() {
    return new Promise(resolve => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      resolve();
    });
  }

  addButton.addEventListener("click", addTask);
  deleteAllButton.addEventListener("click", deleteAllTasks);

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filter = tab.getAttribute("data-tab");
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderTasks();
    });
  });

  renderTasks();
});
