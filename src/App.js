import './App.css';
import React from 'react';

function App() {

  let getQuote = ''
  let getAuthor = ''

  function newQuote() {
    const url = 'https://api.quotable.io/random';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.content);
        console.log(data.author);
        getQuote = data.content;
        getAuthor = data.author;
      });
  }

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  newQuote();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quotidian</h1>
        <h2>Quote machine</h2>
        {getQuote}
        {getAuthor}
      </header>
    </div>
  );
}

export default App;
