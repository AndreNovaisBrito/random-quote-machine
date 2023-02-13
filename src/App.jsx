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
  {quote: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.", author: "John Maxwell"},
  {quote: "Successful people do what unsuccessful people are not willing to do.", author: "Jim Rohn"},
  {quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
  {quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett"},
  {quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer"},
  {quote: "Success is not a destination, it's a journey.", author: "Zig Ziglar"},
  {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
  {quote: "A goal is not always meant to be reached, it often serves simply as something to aim at.", author: "Bruce Lee"},
  {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  {quote: "Success is a journey, not a destination. The doing is often more important than the outcome.", author: "Arthur Ashe"},
  {quote: "Success is not the absence of failure; it's the persistence through failure.", author: "A. J. Johns"},
  {quote: "Success is not how much money you make, but how much you keep, how hard it works for you, and how many generations you keep it for.", author: "Robert Kiyosaki"},
  {quote: "Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, 'What's in it for me?'", author: "Brian Tracy"},
  {quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill"}
]

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function App() {
  let randomNumber = getRandomNumber(quoteBank);
  const [quote, setQuote] = useState(quoteBank[randomNumber].quote);
  const [author, setAuthor] = useState(quoteBank[randomNumber].author);

  let twitterLink= `https://twitter.com/intent/tweet?text="${quote}"- ${author}`

  function handleClick(){
    let randomNumber2  = getRandomNumber(quoteBank);
    setQuote(quoteBank[randomNumber2].quote)
    setAuthor(quoteBank[randomNumber2].author)
  }
  return (
    <div className="App">
      <div id='quote-box' className='quote-box'>
      <div className="quote-wrapper">
        <h1 id='text'>"{quote}"</h1>
        
      </div>
        <div className='buttons'>
        <h2 id='author'>{author}</h2>
          <button id='new-quote' onClick={handleClick}>
            New Quote
          </button>
          <button>
            <a id='tweet-quote' href={twitterLink} target="_blank">Tweet</a>
          </button>
        </div>
      </div>
    </div>
  )
}


export default App
