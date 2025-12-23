import { useState } from 'react'

export default function Quote() {
  const [quote, setQuote] = useState("Click for a quote!");
  const quotes = [
    "Small progress is still progress.",
    "Focus on being productive instead of busy.",
    "One step at a time is enough."
  ];

  const getNewQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="card">
      <h2>Motivational Quote</h2>
      <blockquote>{quote}</blockquote>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  )
}