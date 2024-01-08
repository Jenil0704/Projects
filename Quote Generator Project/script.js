let apiQuotes = [];
var quoteContainer = document.getElementById("quote-container");
var quoteText = document.getElementById("quote");
var quoteAuthor = document.getElementById("author")
var tweetbtn = document.querySelector("#tweet");
var newQuoteBtn = document.getElementById("newquote");
const loader = document.getElementById("loader");
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}
function getnewQuotes(){
    loading();
    let quotes = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    if(quotes.text.length>80){
        quoteText.classList.add("long-text");
    }else{
        quoteText.classList.remove("long-text");
    }
    quoteText.innerText = quotes.text;
    quoteAuthor.innerText = quotes.author;
    complete();
}

async function getQuotes(){
    loading();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json"
    try{
        const response = await fetch(apiUrl);
        console.log("getting data..")
        apiQuotes = await response.json();
        getnewQuotes();
        console.log("data fetched")
    }
    catch(error){

    }
}
getQuotes();

newQuoteBtn.addEventListener("click",getQuotes)
tweetbtn.addEventListener("click",tweetText);

function tweetText(){
    const tweetURL = `https://twitter.com/intent/tweet?text = ${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(tweetURL, "_blank");
}