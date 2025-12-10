export function initQuotes() {
    const quote = document.getElementById("quote-text");
    const quoteBtn = document.getElementById("qoute-btn");

    async function fetchQuote() {
        try {
            async function loadQuote() {
                const res = await fetch("https://programming-quotesapi.vercel.app/api/random");
                const data = await res.json();
                quoteText.textContent = `"${data.quote}" — ${data.author}`;
            }
            await loadQuote();

        } catch (error) {
            quote.innerText = "Failed to fetch quote. Please try again.";
        }
    }

    quoteBtn.addEventListener("click", fetchQuote);

    fetchQuote();
}