import React from 'react'
import './TechNewsItem.css'

const TechNewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={urlToImage}  alt={urlToImage} />
                <h3><a href={url} target="_blank"
            rel="noopener noreferrer">{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TechNewsItem
