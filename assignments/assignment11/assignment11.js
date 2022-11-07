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

/* twitter button api
credit to https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites for twitter api code*/
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));

/*function tweetQuote(quote) {
    twitterBtn.addEventListener('click', tweetQuote);
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
    window.open(twitterUrl, "_blank");
  }*/