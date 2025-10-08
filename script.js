document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoInput = document.getElementById("todo-input")
    const todoList = document.getElementById("todo-list")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    addTaskBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if(taskText === "") return
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed : false
        }
        tasks.push(newTask)
        saveTasks()
        todoInput.value = ""
    })
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})