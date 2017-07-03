document.addEventListener("DOMContentLoaded", function() {
  let quoteButton = document.getElementById("quote-button");
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");

  quoteButton.addEventListener("click", e => {
    e.preventDefault();
    quote.innerHTML = "fart";
  });
});
