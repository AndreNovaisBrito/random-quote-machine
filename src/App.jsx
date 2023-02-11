import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState('Nice quote 1');
  const [author, setAuthor] = useState('Jaesnan');
  function handleClick(){
    setQuote('Second Quote')
    setAuthor('Félix')
  }
  return (
    <div className="App">
      <wrapper id='quote-box'>

        <h1 id='text'>{quote}</h1>
        <h2 id='author'>{author}</h2>

        <button id='new-quote' onClick={handleClick}>
          New Quote !!
        </button>
        <button >
          <a id='tweet-quote' href='twitter.com/intent/tweet' target="_top">Tweet</a>
        </button>
      </wrapper>
    </div>
  )
}

export default App
