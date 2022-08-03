import React from 'react'
import './NewsBriefs.css'

const NewsBriefs = ({ articles }) => {

    const articleCards = articles.map(article => {
        return <div className='article-card-container'>
            <div className='article-card'>
                <p className='article-section'>{article.section}</p>
                <br />
                <p className='article-title'>{article.title}</p>
            </div>
            <p className='article-abstract'>{article.abstract}</p>

        </div>

    })
    return (
        <div className='articles-box'>{articleCards}</div>
    )
}

export default NewsBriefs