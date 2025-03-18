import { useEffect } from 'react';

function getRandomQuote() {
  const quotes = [
    "I'm not a fan of spicy food.",
    "I'm not a fan of loud noises.",
    "I'm not a fan of crowded places."
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const quote = getRandomQuote();
  useEffect(() => {
    console.log('The random quote is: ' + quote);
  });
  return (
    <div>
      <h1>{quote}</h1>
    </div>
  );
}
export default App;
