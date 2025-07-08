//  window.onload = showTasks;
  let editId = null;

  const saveTask = () => {
    const task = document.getElementById("taskName").value.trim();
    if (!task) return alert("Please enter a task");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (editId !== null) {
      tasks[editId] = { task };
      editId = null;
    } else {
      tasks.push({ task });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
    clearInput();
  };

  const showTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskData = document.getElementById("taskData");
    taskData.innerHTML = "";

    tasks.forEach((t, index) => {
      taskData.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${t.task}</td>
          <td>
            <button onclick="editTask(${index})">✏️ Edit</button>
            <button onclick="deleteTask(${index})">🗑️ Delete</button>
          </td>
        </tr>`;
    });
  };

  const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
  };

  const editTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    document.getElementById("taskName").value = tasks[index].task;
    editId = index;
  };

  const clearInput = () => {
    document.getElementById("taskName").value = "";
  };