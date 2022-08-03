import React, { useState, useEffect } from 'react'
import './App.css';
import NewsNowIcon from './Assests/NewsNowIcon.png'
import ArticleFilters from './ArticleFilters/ArticleFilters';
import NewsBriefs from './NewsBreifs/NewsBriefs';

function App() {

  const [homePage, setHomePage] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6dWDbpnkwGMXRHAuObTLsRvhc21hoItI').then(data => data.json()).then(data => setHomePage(data.results))
  }, [])

  console.log(homePage)
  return (
    <div className="App">
      <div className='heading'>
        <img src={NewsNowIcon} />
        <h1>News Now</h1>
      </div>
      <ArticleFilters />
      <div>I am a card</div>
      <div>I am a card</div>
      <div>I am a card</div>
      <div>I am a card</div>


    </div>
  );
}

export default App;
