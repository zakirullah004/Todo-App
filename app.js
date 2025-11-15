let addTodoBtn = document.getElementById("addTodoBtn")
let input = document.getElementById("input")
let todoItemList = document.getElementById("todoItems")


let editLi = null; // edit ke liye use kiya ha jisme li ot kar ayega 


// localstorage se mane apna sare todos mangwae ha
let allTodos = JSON.parse(localStorage.getItem("alltodos")) || []

function renderTodos() {
    todoItemList.innerHTML += allTodos
}
renderTodos();

document.querySelector("form").addEventListener("submit", function (e) {
    addTodo(e)
})

function addTodo(e) {
    e.preventDefault();

    if (addTodoBtn.innerHTML == "Edit") { // agar edit ha to new todo add na ho 

        // console.log(input.value);
        if(!input.value || input.value.trim() == ""){
            alert("please write someething")
            input.focus()
            input.value = editLi.firstElementChild.innerText
        }else{
            editLi.firstElementChild.innerText = input.value
            addTodoBtn.innerHTML = "Add"
            addTodoBtn.classList.remove("colorwhenedit")
            input.value = "";
        }

    } else { // simple new todo add karane ke liye

        console.log(input.value);

        if (!input.value || input.value.trim() == "") return alert("please write something");


        todoItemList.innerHTML += `
               <li><p>${input.value}</p><div class="icons"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></div></li>
            `;

        input.value = "";
        addTodoBtn.innerHTML = "Add"

    }
    saveTodo()

}

todoItemList.addEventListener('click', function (e) {

    // todo delete karne ke liye
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.parentElement.remove();
    }

    // todo edit karne ke liye
    if (e.target.classList.contains("fa-pen-to-square")) {
        let liText = e.target.parentElement.parentElement.firstElementChild.innerText;
        input.value = liText
        input.focus();

        editLi = e.target.parentElement.parentElement;
        addTodoBtn.innerHTML = "Edit"
        addTodoBtn.classList.add("colorwhenedit")

    }

    // text highlight ke liye jab complete todo ho jaye tab
    if (e.target.tagName == "P") {

        let p = e.target;
        p.classList.toggle("done");

        if (e.target.className == "done") {
            e.target.nextElementSibling.firstElementChild.style.display = "none";
        } else {
            e.target.nextElementSibling.firstElementChild.style.display = "inline-block";
        }

    }
    saveTodo()

})

// sare todos remove kardega
function clearTodos() {
    todoItemList.innerHTML = ""
    localStorage.removeItem("alltodos")
}

function saveTodo(){
    localStorage.setItem("alltodos", JSON.stringify(todoItemList.innerHTML))
}