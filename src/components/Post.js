import React from 'react'

export default function Post({ content, handleDeletePost, id }) {
    return (
        <div className='Post'>
            <div className='PostText'>{content}</div>
            <div className='Buttons'>
                <div className='Button'>EDIT</div>
                <div className='Button' onClick={() => { handleDeletePost(id) }}>DELETE</div>
            </div>

        </div>

    )
}
