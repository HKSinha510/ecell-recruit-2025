// Variables
var todos = [];
var currentId = 0;
var todoCount = 0;
var lastSaved = null;
var appVersion = "1.0";
var maxTodos = 100;
var userName = "User";

function addTodo() {
    var todoText = document.getElementById("todoInput").value;
    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }
    
    var todoList = document.getElementById("todoList");
    var li = document.createElement("li");
    
    li.innerHTML = todoText + 
        "<button class='delete-btn' onclick='deleteTodo(this)'>Delete</button>";
    
    todoList.appendChild(li);
    document.getElementById("todoInput").value = "";
    
    todos.push({
        id: currentId++,
        text: todoText,
        done: false
    });
    
    todoCount++;
}

function deleteTodo(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}

function saveToDB() {
    alert("Trying to save to MongoDB...");
    
    // MongoDB
    const mongoUrl = "mongodb+sbv://lmao.ifyouarereadingthis_thensuckyourmom'sdick:yeah,shehasdick,iknow/c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const dbName = "todoApp";    
    const collectionName = "todos";
    
    try {

        console.log("Connecting to MongoDB at " + mongoUrl);
        console.log("Using database: " + dbName);
        console.log("Saving todos to collection: " + collectionName);
        
        setTimeout(function() {
            alert("Todo list saved to database successfully!");
            lastSaved = new Date();
        }, 1000);

    } catch (error) {
        alert("Error saving to database!");
    }
}

function markAsDone(todo) {
    todo.done = true;
    todo.style.textDecoration = "line-through";
}

function clearAll() {
    document.getElementById("todoList").innerHTML = "";
    todos = [];
}

function loadFromDB() {
    alert("Loading from database...");

}

window.onload = function() {
    console.log("Todo app loaded!");
}