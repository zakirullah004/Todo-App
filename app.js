let addTodoBtn = document.getElementById("addTodoBtn")
let input = document.getElementById("input")
let todoItemList = document.getElementById("todoItems")


let editLi = null;

document.querySelector("form").addEventListener("submit", function (e) {
    addTodo(e)
})

function addTodo(e) {
    e.preventDefault();

    if (addTodoBtn.innerHTML == "Edit") {

        // console.log(input.value);
        editLi.firstElementChild.innerText = input.value
        addTodoBtn.innerHTML = "Add"
        input.value = "";
        alert("todo edited ")

    } else {

        console.log(input.value);

        if (!input.value || input.value.trim() == "") return alert("please write something");


        todoItemList.innerHTML += `
               <li><p>${input.value}</p><div><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></div></li>
            `;

        input.value = "";
        addTodoBtn.innerHTML = "Add"
    }

}

todoItemList.addEventListener('click', function (e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains("fa-trash")) {
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.classList.contains("fa-pen-to-square")) {
        // console.log(e.target.parentElement.parentElement.firstElementChild);
        let liText = e.target.parentElement.parentElement.firstElementChild.innerText;
        input.value = liText
        input.focus();
        editLi = e.target.parentElement.parentElement;
        addTodoBtn.innerHTML = "Edit"
    }
})