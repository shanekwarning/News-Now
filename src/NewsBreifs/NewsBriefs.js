import React from 'react'
import './NewsBriefs.css'
import { NavLink } from 'react-router-dom'

const NewsBriefs = ({ articles }) => {

    const articleCards = articles.map((article, index) => {
        return <NavLink to={`/${article.title}`} key={`${index}`} style={{ textDecoration: 'none' }}>
            <div className='article-card-container'>
                <div className='article-title-box'>
                    <p className='article-title'>{article.title}</p>
                </div>
                <div className='article-card'>
                    <p className='article-category'>Category: {article.section}</p>
                    <br />
                    <div className='news-brief-abstract-box'>
                        <p className='article-abstract'>{article.abstract}</p>
                    </div>
                    <br />
                    {article.multimedia ? <img className='news-breif-img' src={article.multimedia[2].url} /> : ''}
                </div>
            </div>
        </NavLink>

    })
    return (
        <div className='articles-box'>{articleCards}</div>
    )
}

export default NewsBriefs