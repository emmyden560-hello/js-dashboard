const todoList = [];

export function initTodo() {
    loadTodos();
    viewTodos();

    document.querySelector("#addbtn").addEventListener("click", () => {
        addTodo();
    });

    function addTodo() {
        const inputElement = document.getElementById("todo-input");
        const input = inputElement.value.trim();

        if (!input) return;

        if (todoList.length >= 5) {
            alert("You can only add up to 2 notes.");
            return;
        }

        todoList.push({ input, done: false });

        inputElement.value = '';

        saveTodos();
        viewTodos();
    }

    function viewTodos() {
        const container = document.getElementById("todo-list");
        container.innerHTML = "";

        todoList.forEach((item, index) => {
            const li = document.createElement("li");
            li.className = "p-2 w-95 bg-gray-100 rounded flex items-center mb-2 shadow-sm";

            const textSpan = document.createElement("span");
            textSpan.textContent = item.input;

            if (item.done) {
                textSpan.addEventListener("click", () => {
                    item.done = !item.done;
                    textSpan.className = "line-through text-gray-500";
                    viewTodos();
                });
            }
            const delBtn = document.createElement("button");
            delBtn.textContent = "🗑️";
            delBtn.className = "hover:cursor-pointer text-red-500 justify-end ml-auto";
            delBtn.addEventListener("click", () => {
                todoList.splice(index, 1);
                viewTodos();
            });

            li.appendChild(textSpan);
            li.appendChild(delBtn);
            container.appendChild(li);

        });
    }

}


function saveTodos() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


function loadTodos() {
    const stored = localStorage.getItem("todoList");
    if (stored) {
        todoList.push(...JSON.parse(stored));
    }
}