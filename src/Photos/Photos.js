import React, { useEffect } from 'react'


const Photos = ({ foundArticle }) => {
    let images;
    if (foundArticle !== '') {
        images = foundArticle.multimedia.map(image => {
            return <div>
                <img src={image.url} />
                <a>{image.caption}</a>
            </div>
        })
    }

    return (
        <div>
            {images ? images : ''}
        </div>
    )
}

export default Photos