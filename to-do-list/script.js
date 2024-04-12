function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== '') {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      
      var checkButton = document.createElement("button");
      checkButton.textContent = "✔️";
      checkButton.className = "checkButton";
      
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.className = "deleteButton";
      
      li.appendChild(checkButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = '';

      li.onclick = function() {
          if (!li.classList.contains("completed")) {
              li.classList.add("completed");
              deleteButton.style.display = "inline";
          } else {
              li.classList.remove("completed");
              deleteButton.style.display = "inline";
          }
      };

      deleteButton.onclick = function(event) {
          event.stopPropagation();
          taskList.removeChild(li);
      };
  } else {
      alert("Please enter a task!");
  }
}
