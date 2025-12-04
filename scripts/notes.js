const notes = [];
let editIndex = null;

export function initNotes() {

    loadNotes();
    viewNotes();

    document.querySelector("#add-note-btn").addEventListener("click", () => {
        addNote();
    });

    function addNote() {
        const inputElement = document.getElementById("note-input");
        const input = inputElement.value.trim();

        if (!input) return;

        if (editIndex !== null) {
            notes[editIndex].input = input;
            editIndex = null;
        } else {
            if (notes.length >= 2) {
                alert("You can only add up to 2 notes.");
                return;
            }
            notes.push({ input });
        }

        inputElement.value = '';

        saveNotes();
        viewNotes();
    }

    function viewNotes() {
        const container = document.getElementById("notes");
        container.innerHTML = "";

        notes.forEach((note, index) => {
            const div = document.createElement("div");
            div.className = "p-2 bg-gray-100 rounded mb-2 shadow-sm flex flex-col";

            const text = document.createElement('span');
            text.textContent = note.input;

            const btnContainer = document.createElement('div');
            btnContainer.className = "flex justify-end mt-2";

            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.className = "text-blue-500 justify-end hover:cursor-pointer ml-auto";
            editBtn.addEventListener("click", () => {
                document.getElementById("note-input").value = note.input;
                editIndex = index;
            });

            const delBtn = document.createElement('button');
            delBtn.textContent = "Delete";
            delBtn.className = "text-red-500 justify-end hover:cursor-pointer ml-3";
            delBtn.addEventListener("click", () => {
                notes.splice(index, 1);
                viewNotes();
            });

            div.appendChild(text);
            container.appendChild(div);

            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(delBtn);
            div.appendChild(btnContainer);

        });
    }

}


function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}


function loadNotes() {
    const stored = localStorage.getItem("notes");
    if (stored) {
        notes.push(...JSON.parse(stored));
    }
}
