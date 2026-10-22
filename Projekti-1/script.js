const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

if (todoForm && todoInput && todoList) {
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const taskText = todoInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.className = "todo-item";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "todo-checkbox";

            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    li.classList.add("completed");
                } else {
                    li.classList.remove("completed");
                }
            });

            const span = document.createElement("span");
            span.className = "todo-text";
            span.textContent = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "Poista";

            deleteBtn.addEventListener("click", function () {
                todoList.removeChild(li);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
            todoInput.value = "";
        } else {
            alert("Kirjoita tehtävä ennen lisäämistä!");
        }
    });
}

const existingItems = document.querySelectorAll(".todo-item");
existingItems.forEach(function (li) {
    const checkbox = li.querySelector(".todo-checkbox");
    const deleteBtn = li.querySelector(".delete-btn");

    if (checkbox) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
    }

    if (deleteBtn) {
        deleteBtn.addEventListener("click", function () {
            todoList.removeChild(li);
        });
    }
});