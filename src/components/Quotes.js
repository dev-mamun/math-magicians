/** ****************************************
 * Project: math-magicians
 * File: Quotes.js
 * Created: 3/30/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import LoadingSpinner from './LoadingSpinner';

export default function Quotes() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleFetch = async () => {
    const $url = 'https://api.api-ninjas.com/v1/quotes';
    setIsLoading(true);
    await fetch($url,
      {
        headers: {
          'X-Api-Key': 'VB6fCHNwu864O21lpthw6IV8hNhobYyC8207wMed',
        },
      })
      .then((respose) => respose.json())
      .then((respose) => {
        setQuote(respose);
        setIsLoading(false);
        // Optional code to simulate delay
        /* setTimeout(() => {
          setQuote(respose);
          setIsLoading(false);
        }, 5000); */
      })
      .catch(() => {
        setErrorMessage('Unable to fetch data');
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setErrorMessage('');
  }, [quote]);
  useEffect(() => {
    handleFetch();
  }, []);

  const renderQuote = quote.map(($item) => {
    const $quote = `"${$item.quote}" by ${$item.author}`;
    return (
      <div className="quote" key={uuid()}>
        {$quote}
      </div>
    );
  });
  return (
    <div className="quotes">
      {isLoading ? <LoadingSpinner /> : renderQuote}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button className="d-none" type="button" onClick={handleFetch} disabled={isLoading}>
        Fetch Users
      </button>
    </div>
  );
}
