import React from 'react'
import './Article.css';

const Article = ({ image, title, arthor, paragraph }) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className="article_content">
            <p>{arthor}</p>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Article