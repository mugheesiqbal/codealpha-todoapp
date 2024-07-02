
document.addEventListener("DOMContentLoaded", () => {
    const mainTodo = document.getElementsByClassName("main_Todo")[0];
    const todoInput = document.getElementsByClassName("todo_input")[0];
    const todoList = document.getElementsByClassName("todo_list")[0];
    mainTodo.addEventListener("submit", (e) => {
        e.preventDefault();
        addTodo();
    });


    const addTodo = () => {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = document.createElement("li");
            todoItem.style.fontSize = "24px";
            todoItem.textContent = todoText;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.style.background = "green";
            editButton.addEventListener("click", () => {
                editItem(todoItem, todoText);
            })

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                todoList.removeChild(todoItem);
            })
            todoItem.appendChild(editButton);
            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);


            todoItem.addEventListener("click", (e) => {
                // e.preventDefault();
                todoItem.classList.toggle("mark");

            })
            todoInput.value = "";
        }
        const editItem = (todoItem, preItem) => {
            const newText = prompt("Edit Todo", preItem);
            if (newText !== "null" && newText.trim() !== "") {
                todoItem.firstChild.textContent = newText;
            }
        }
    }
});


