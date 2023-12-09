import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TechNewsItem from './TechNewsItem'

const TechNewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=software&apiKey=b5e01a0bdbbc4d758db1f8e250932182`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            {(articles && articles.slice(0,3)).map(article => {
                return(
                    <TechNewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default TechNewsList
