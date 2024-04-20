// Create an empty array to store the todo items
let todoList = [];


// Function to add a new todo item
function addTodoItem(item) {
    todoList.push(item);
}

// Function to remove a todo item
function removeTodoItem(item) {
    const index = todoList.indexOf(item);
    if (index > -1) {
        todoList.splice(index, 1);
    }
}

// Function to display the todo list
function displayTodoList() {
    console.log("Todo List:");
    for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
    }
}

// Usage example:
addTodoItem("Buy groceries");
addTodoItem("Finish homework");
addTodoItem("Go for a run");
displayTodoList();
removeTodoItem("Finish homework");
displayTodoList();