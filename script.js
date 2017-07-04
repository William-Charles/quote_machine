document.addEventListener("DOMContentLoaded", function() {
  let quoteButton = document.getElementById("quote-button");
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");
  let tweetBtn = document.getElementById("tweet-button");

  tweetBtn.addEventListener("click", function() {
    var tweet =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent("hello" + " -" + "htmlN");
    window.open(tweet);
  });

  quoteButton.addEventListener("click", event => {
    event.preventDefault();

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    let init = {
      method: "GET",
      headers: headers,
      mode: "no-cors"
    };
    fetch("http://quotesondesign.com/api/3.0/api-3.0.json?callback=?", init)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
    quote.innerHTML = "fart";
  });
});
