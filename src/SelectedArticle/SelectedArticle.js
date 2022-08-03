import React from 'react'
import { useState, useEffect } from 'react'
import Photos from '../Photos/Photos'

const SelectedArticle = ({ foundArticle }) => {



    const formatDate = () => {
        let year;
        let month;
        let day;
        let articleDate;
        if (foundArticle !== '') {
            year = foundArticle.created_date.slice(0, 4);
            month = foundArticle.created_date.slice(5, 7)
            day = foundArticle.created_date.slice(8, 10)
            return articleDate = (`${month}-${day}-${year}`)
        }

    }
    console.log(formatDate())

    console.log(foundArticle.created_date)
    console.log(foundArticle)

    return (

        <div>


            {foundArticle ? <div> <div>
                <a href={`${foundArticle.url}`} >{foundArticle.title}</a>
                <p>{formatDate()}</p>
            </div>
                <p>{foundArticle.byline}</p>
                <p>{foundArticle.abstract}</p>
                <div className='article-photo-box'>
                    {foundArticle.multimedia ? <img src={foundArticle.multimedia[1].url} /> : ''}
                    {foundArticle.multimedia ? <p>{foundArticle.multimedia[1].caption}</p> : ''}
                </div>  </div> : <h2>We are sorry, your article could not be found.</h2>}




        </div>
    )

}

export default SelectedArticle