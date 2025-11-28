let addTodoBtn = document.getElementById("addTodoBtn")
let input = document.getElementById("input")
let todoItemList = document.getElementById("todoItems")




// localstorage se mane apna sare todos mangwae ha
let allTodos = JSON.parse(localStorage.getItem("alltodos")) || []


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
})

function addTodo(e) {

    if (!input.value || input.value.trim() == "") return alert("please write something");

    allTodos.push(input.value)

    localStorage.setItem("alltodos", JSON.stringify(allTodos))
    input.value = ""

    renderTodos()
}


function renderTodos() {
    if (addTodoBtn.innerHTML == "Edit") {
        addTodoBtn.innerHTML = "Add"
        input.value = ""
        addTodoBtn.removeAttribute("onclick")
        addTodoBtn.setAttribute("onclick", `addTodo()`)
        addTodoBtn.classList.remove("colorwhenedit")
    }

    todoItemList.innerHTML = ""

    let allTodos = JSON.parse(localStorage.getItem("alltodos")) || []
    // console.log(allTodos);
    allTodos.forEach(function (item, index) {
        let li = document.createElement("li")
        li.innerHTML += `

                <p>${item}</p>
                <div class="icons">
                    <i class="fa-solid fa-pen-to-square" onclick="editTodo(${index})"></i>
                    <i class="fa-solid fa-trash" onclick="deleteTodo(${index})"></i>
                </div>
            `;
        todoItemList.prepend(li)
    })
}
renderTodos()

function deleteTodo(todoIndex) {
    console.log(allTodos);
    // console.log("ma chala",todoIndex);
    // console.log(allTodos[todoIndex]);
    allTodos.splice(todoIndex, 1); // delete todo from local storage
    localStorage.setItem("alltodos", JSON.stringify(allTodos))
    console.log(allTodos);
    renderTodos()
}

function editTodo(todoIndex) {
    // console.log(allTodos[todoIndex]);
    input.focus()
    input.value = allTodos[todoIndex]

    addTodoBtn.innerHTML = "Edit";

    addTodoBtn.classList.add("colorwhenedit")
    
    addTodoBtn.removeAttribute("onclick")
    addTodoBtn.setAttribute("onclick", `editHandler(${todoIndex})`)

}

function editHandler(ind) {

    // console.log("ma chala", ind);
    allTodos.splice(ind, 1, input.value)
    localStorage.setItem("alltodos", JSON.stringify(allTodos));
    renderTodos()
}


function clearTodos(){
    localStorage.setItem("alltodos",JSON.stringify([]))
    todoItemList.innerHTML = "";
    allTodos = []
}