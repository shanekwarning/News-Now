import React from 'react'
import { useState, useEffect } from 'react'

const SelectedArticle = ({ selectedArticle, allArticles }) => {

    const [foundArticle, setFoundArticle] = useState('')

    useEffect(() => {
        return selectedArticle ? setFoundArticle(allArticles.find(article => article.title === selectedArticle)) : ''

    })
    console.log(foundArticle)

    return (
        <div>hello</div>
    )
}

export default SelectedArticle