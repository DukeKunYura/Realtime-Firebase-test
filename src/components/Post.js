import React from 'react'

export default function Post({ content, handleDeletePost, id }) {
    return (
        <>
            <div>{content}</div>
            <div onClick={() => { handleDeletePost(id) }}>DELETE</div>
        </>

    )
}
