import React from 'react'

export default function Post({ content, deletePost, id }) {
    return (
        <>
            <div>{content}</div>
            <div onClick={() => { deletePost(id) }}>DELETE</div>
        </>

    )
}
