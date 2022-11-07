async function getQuote() {
    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json();
      displayQuote(json.quote);
  
    } catch (err) {
      console.log(err)
      alert('Failed to get quote');
    }
  }
/* set endpoint for quote generator api*/
const endpoint = "https://zenquotes.io/api/quotes/";

const newQuoteButton = document.querySelector('#js-new-quote');
  newQuoteButton.addEventListener('click', getQuote);

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }

getQuote();



/*function tweetQuote(quote) {
    twitterBtn.addEventListener('click', tweetQuote);
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
    window.open(twitterUrl, "_blank");
  }*/