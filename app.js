let addTodoBtn = document.getElementById("addTodoBtn")
let input = document.getElementById("input")
let todoItemList = document.getElementById("todoItems")

document.querySelector("form").addEventListener("submit",function(e){
    addTodo(e)
})

function addTodo(e) {

    e.preventDefault();

    console.log(input.value);

    if (!input.value || input.value.trim() == "") return alert("please write something");

    
    todoItemList.innerHTML +=  `<li>${input.value}</li>`;

    input.value = ""

}