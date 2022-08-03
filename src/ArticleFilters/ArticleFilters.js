import React from 'react'
import './ArticleFilters.css'

const ArticleFilters = ({ filterFunction }) => {
    const buttons = ['arts',
        'automobiles',
        'books',
        'business',
        'fashion',
        'food',
        'health',
        'home',
        'insider',
        'magazine',
        'movies',
        'nyregion',
        'obituaries',
        'opinion',
        'politics',
        'realestate',
        'science',
        'sports',
        'sundayreview',
        'technology',
        'theater',
        't-magazine',
        'travel',
        'upshot',
        'us',
        'world'
    ]

    const filters = buttons.map(button => {
        return <button className='button-solid' onClick={() => filterFunction(button)}>{button}</button>
    })
    return (
        <div className='button-box'>{filters}</div>
    )
}

export default ArticleFilters