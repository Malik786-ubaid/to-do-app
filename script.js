// Function to handle adding tasks
function addTask() {
  let input = document.getElementById("task-input");
  let taskText = input.value.trim();
  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
}
