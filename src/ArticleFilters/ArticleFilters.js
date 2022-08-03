import React from 'react'
import './ArticleFilters.css'

const ArticleFilters = () => {
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
        'reaestate',
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
        return <button>{button}</button>
    })
    return (
        <div>{filters}</div>
    )
}

export default ArticleFilters