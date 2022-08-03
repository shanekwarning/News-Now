import React from 'react'
import './NewsBriefs.css'
import { NavLink } from 'react-router-dom'

const NewsBriefs = ({ articles }) => {

    const articleCards = articles.map((article, index) => {
        return <NavLink to={`/${article.title}`} key={`${index}`}>
            <div className='article-card-container'>
                <div className='article-card'>
                    <p className='article-section'>{article.section}</p>
                    <br />
                    <p className='article-title'>{article.title}</p>
                </div>
                <p className='article-abstract'>{article.abstract}</p>

            </div>
        </NavLink>

    })
    return (
        <div className='articles-box'>{articleCards}</div>
    )
}

export default NewsBriefs