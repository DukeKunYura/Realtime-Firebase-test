import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsActiveEditing } from '../redux/masterSlice';

export default function Post({ content, handleDeletePost, EditPost, id }) {

    const state = useSelector((state) => state.master);

    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);

    const handleEditPost = (id) => {
        if (!isEditing && !state.isActiveEditing) {
            setIsEditing(true);
            dispatch(setIsActiveEditing(true));
        } else {
            setIsEditing(false)

        }
    };

    const handleSavePost = (id) => {
        setIsEditing(false);
        dispatch(setIsActiveEditing(false));
    };




    return (
        <>
            {isEditing &&
                <div className='PostEditing'>
                    <div className='PostText'>{content}</div>
                    <div className='Buttons'>
                        <div className='Button' onClick={() => { handleSavePost(id) }}>SAVE</div>
                        <div className='Button' onClick={() => { handleDeletePost(id) }}>DELETE</div>
                    </div>

                </div>}
            {!isEditing &&
                <div className='Post'>
                    <div className='PostText'>{content}</div>
                    <div className='Buttons'>
                        <div className='Button' onClick={() => { handleEditPost(id) }}>EDIT</div>
                        <div className='Button' onClick={() => { handleDeletePost(id) }}>DELETE</div>
                    </div>

                </div>}
        </>


    )
}
