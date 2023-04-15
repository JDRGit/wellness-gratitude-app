import React, { useState, useEffect } from 'react';

const Inspiration = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="font-serif text-2xl mb-4">Inspiration</h2>
      <blockquote className="text-gray-700">
        {quote ? (
          <>
            <p>{quote}</p>
            <footer className="text-right">- {author}</footer>
          </>
        ) : (
          <p>Loading inspirational quote...</p>
        )}
      </blockquote>
    </div>
  );
};

export default Inspiration;
