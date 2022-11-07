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

const endpoint = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

const newQuoteButton = document.querySelector('#js-new-quote');
  newQuoteButton.addEventListener('click', getQuote);

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }

function tweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
  }
 getQuote();