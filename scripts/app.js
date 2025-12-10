import { initTodo } from "./todo.js";
import { initNotes } from "./notes.js";
import { initWeather } from "./weather.js";
import { initQuotes } from "./quotes.js";
import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
    initTodo();
    initNotes();
    initWeather();
    initQuotes();
    initTheme();
});
