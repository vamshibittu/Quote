const quoteText = document.getElementById('quote-text');
const newQuoteButton = document.getElementById('new-quote');

const quotes = [
    {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "text": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
    },
    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "text": "if uh love something...set it free... if it comeback it's yours,if it not then it never was",
        "author": "Rakesh mahaan"
    },
    {
        "text": "if uh love something...set it free... if it comeback then don't accept her cz no body choosen her",
        "author": "Rakesh insta"
    }
    // Add more quotes here
]
;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteText.innerHTML = `"${randomQuote.text}" - ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', displayRandomQuote);
displayRandomQuote(); // Show a random quote when the page loads

// Fetch quotes from the JSON file (assuming it's in the same directory)
// You can use Fetch API or other methods to load quotes from an external source.
