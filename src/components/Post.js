import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIdEditingPost } from '../redux/masterSlice';

export default function Post({ content, handleDeletePost, handleEditPost, id }) {

    const state = useSelector((state) => state.master);

    const dispatch = useDispatch();

    const [text, setText] = useState(content);

    const handleChoicePost = (id) => {
        dispatch(setIdEditingPost(id))
    };

    const handleSavePost = (id, text) => {
        handleEditPost(id, text);
        dispatch(setIdEditingPost(""));
    };

    return (
        <>
            {state.idEditingPost === id ?
                <div className='PostEditing'>
                    <input
                        className='InputEditing'
                        maxLength={10}
                        value={text}
                        onChange={(e) => { setText(e.target.value) }} />
                    <div className='Buttons'>
                        <div className='Button' onClick={() => { handleSavePost(id, text) }}>SAVE</div>
                        <div className='Button' onClick={() => { handleDeletePost(id) }}>DELETE</div>
                    </div>

                </div>
                :
                <div className='Post'>
                    <div className='PostText'>{content}</div>
                    <div className='Buttons'>
                        <div className='Button' onClick={() => { handleChoicePost(id) }}>EDIT</div>
                        <div className='Button' onClick={() => { handleDeletePost(id) }}>DELETE</div>
                    </div>

                </div>}
        </>


    )
}
