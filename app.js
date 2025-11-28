let addTodoBtn = document.getElementById("addTodoBtn")
let input = document.getElementById("input")
let todoItemList = document.getElementById("todoItems")


let editLi = null; // edit ke liye use kiya ha jisme li ot kar ayega 


// localstorage se mane apna sare todos mangwae ha
let allTodos = JSON.parse(localStorage.getItem("alltodos")) || []


document.querySelector("form").addEventListener("submit", function (e) {
    addTodo(e)
})

function addTodo(e) {
    e.preventDefault();

    if (!input.value || input.value.trim() == "") return alert("please write something");

    allTodos.push(input.value)

    localStorage.setItem("alltodos", JSON.stringify(allTodos))
    input.value = ""

    renderTodos()


    // if (addTodoBtn.innerHTML == "Edit") { // agar edit ha to new todo add na ho 

    //     // console.log(input.value);
    //     if (!input.value || input.value.trim() == "") {
    //         alert("please write someething")
    //         input.focus()
    //         input.value = editLi.firstElementChild.innerText
    //     } else {
    //         editLi.firstElementChild.innerText = input.value
    //         addTodoBtn.innerHTML = "Add"
    //         addTodoBtn.classList.remove("colorwhenedit")
    //         input.value = "";
    //     }

    // } else { // simple new todo add karane ke liye

    //     console.log(input.value);

    //     if (!input.value || input.value.trim() == "") return alert("please write something");


    //     todoItemList.innerHTML += `
    //            <li>
    //             <p>${input.value}</p>
    //             <div class="icons">
    //                 <i class="fa-solid fa-pen-to-square"></i>
    //                 <i class="fa-solid fa-trash" onclick="deleteTodo(})"></i>
    //             </div>
    //             </li>
    //         `;

    //     allTodos.push(input.value)
    //     input.value = "";
    //     addTodoBtn.innerHTML = "Add"

    // }
    // localStorage.setItem("alltodos", JSON.stringify(allTodos))

}


function renderTodos() {

    todoItemList.innerHTML = ""

    let allTodos = JSON.parse(localStorage.getItem("alltodos")) || []

    allTodos.forEach(function (item, index) {
        let li = document.createElement("li")
        li.innerHTML += `

                <p>${item}</p>
                <div class="icons">
                    <i class="fa-solid fa-pen-to-square"></i>
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
    allTodos.splice(todoIndex,1); // delete todo from local storage
    localStorage.setItem("alltodos",JSON.stringify(allTodos))
    console.log(allTodos);
    renderTodos()
}

