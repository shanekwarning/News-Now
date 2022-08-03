import React, { useState, useEffect } from 'react'
import './App.css';
import NewsNowIcon from './Assests/NewsNowIcon.png'
import ArticleFilters from './ArticleFilters/ArticleFilters';
import NewsBriefs from './NewsBreifs/NewsBriefs';
import SelectedArticle from './SelectedArticle/SelectedArticle';
import { Route, NavLink } from 'react-router-dom'

function App() {

  const [articlesPage, setArticlesPage] = useState('')

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6dWDbpnkwGMXRHAuObTLsRvhc21hoItI').then(data => data.json()).then(data => setArticlesPage(data.results))
  }, [])

  const selectFilter = (filter) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${filter}.json?api-key=6dWDbpnkwGMXRHAuObTLsRvhc21hoItI`).then(data => data.json()).then(data => setArticlesPage(data.results))
  }

  console.log(articlesPage)
  return (
    <div className="App">
      <div className='heading'>
        <img src={NewsNowIcon} />
        <h1 className='website-title'>News Now</h1>
      </div>
      <ArticleFilters filterFunction={selectFilter} />
      <Route exact path='/' render={() => articlesPage ? <NewsBriefs articles={articlesPage} /> : ''} />
      <Route exaxt path='/:title' render={({ match }) => { return <SelectedArticle selectedArticle={match.params.title} allArticles={articlesPage} /> }} />

    </div>
  );
}

export default App;
