import React, { useState, useEffect } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e2d9f08aa2944193ad93c6235585345b'
    fetch(url)
      .then(Response => Response.json())
      .then(data => setArticles(data.articles))
  }, []);
  return (
    <div>
      <h2>Top HeadLines:{articles.length}</h2>
      <News></News>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
