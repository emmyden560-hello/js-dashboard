export function initTheme() {
    const toggleBtn = document.querySelector("#button");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    function savetheme() {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        }

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });

    }
}