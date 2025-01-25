// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todoList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create new list item
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  // Add task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  listItem.appendChild(taskSpan);

  // Add complete toggle functionality
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent triggering the complete toggle
    todoList.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);

  // Append to the list
  todoList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}

// Add task when button is clicked
addTaskButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
