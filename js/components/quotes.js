const quotes = [
  {
    quote: "Stay fly like three 6 fia",
    author: "changmo",
  },
  {
    quote: "Love For All, Hatred For None.",
    author: "Khalifatul Masih III",
  },
  {
    quote: "Die with memories, not dreams.",
    author: "Unknown",
  },
];

function setQuote() {
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[quoteIndex].quote;
  author.innerText = " - " + quotes[quoteIndex].author;
}

export default setQuote;
