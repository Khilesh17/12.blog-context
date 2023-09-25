import React from 'react'

export const Card = ({post}) => {
    return (
        <div className='card'>
            <p className='title'>{post.title}</p>

            <p className='author-detail'>
                By <span className='author'>{post.author}</span> on <span className='category'>{post.category}</span>
            </p>

            <p className='date'>Posted on {post.date}</p>

            <p className='content'>{post.content}</p>

            <div className='tag-div'>
                {
                    post.tags.map((tag, index) => {
                        return <span key={index} className='tags'>{`#${tag}`}</span>
                    })
                }
            </div>
        </div>
    )
}
