import React from 'react'
import { useState, useEffect } from 'react'
import Photos from '../Photos/Photos'

const SelectedArticle = ({ selectedArticle, allArticles }) => {

    const [foundArticle, setFoundArticle] = useState('')

    useEffect(() => {
        if (selectedArticle) {
            setFoundArticle(allArticles.find(article => article.title === selectedArticle))
        }


    }, [])

    console.log(foundArticle)


    return (
        <div>
            <a href={`${foundArticle.url}`} >{foundArticle.title}</a>
            <p>{foundArticle.byline}</p>
            <Photos foundArticle={foundArticle} />
        </div>
    )
}

export default SelectedArticle