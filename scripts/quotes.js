export function initQuotes() {
    const quote = document.getElementById("quote-text");
    const quoteBtn = document.getElementById("qoute-btn");

    async function fetchQuote() {
        try {
            const res = await fetch("https://dummyjson.com/quotes/random");
            const data = await res.json();
            quote.textContent = `"${data.quote}" — ${data.author}`;
        } catch (error) {
            console.error("Quote fetch error:", error);
            quote.textContent = "Failed to fetch quote. Please try again.";
        }
    }

    quoteBtn.addEventListener("click", fetchQuote);

    fetchQuote();
}
