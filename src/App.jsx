import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const quoteBank = [
  {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
  {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
  {quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson"},
  {quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis"},
  {quote: "It does not matter how many times you get knocked down, but how many times you get up.", author: "Vince LOMBARDI"},
  {quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
  {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
  {quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs"},
  {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
]

function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}

function App() {
  let randomNumber = getRandomNumber();
  console.log(randomNumber);
  const [quote, setQuote] = useState(quoteBank[randomNumber].quote);
  const [author, setAuthor] = useState(quoteBank[randomNumber].author);

  function handleClick(){
    let randomNumber2  = getRandomNumber();
    setQuote(quoteBank[randomNumber2].quote)
    setAuthor(quoteBank[randomNumber2].author)
  }
  return (
    <div className="App">
      <div id='quote-box' className='quote-box'>
      <div className="quote-wrapper">
        <h1 id='text'>{quote}</h1>
        
      </div>
        <div className='buttons'>
        <h2 id='author'>{author}</h2>
          <button id='new-quote' onClick={handleClick}>
            New Quote
          </button>
          <button >
            <a id='tweet-quote' href='twitter.com/intent/tweet' target="_blank">Tweet</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
