import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStorePost, setIdEditingPost } from '../redux/masterSlice';
import { DB } from '../firebase/db';

/**
 * Компонент отвечает за добавление поста. Сохраняет текст из инпута в облачную БД firebase и на фронт. 
 */
export default function Adder() {

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const addPost = () => {
        const adder = DB.addPost(text);

        adder.then(data => console.log({ id: data.name, content: text }));
        adder.then(data => { dispatch(addStorePost({ id: data.name, content: text })) });
        adder.then(setText(""))
    };

    const enterDown = (event) => {
        if (event.keyCode === 13 && text !== "") {
            event.preventDefault();
            addPost();
        }
    };

    return (
        <form className='Form'>
            <input
                className='Input'
                placeholder="Введите текст и нажмите ENTER"
                maxLength={10}
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                onKeyDown={(e) => enterDown(e)}
                onClick={() => { dispatch(setIdEditingPost("")) }} />
        </form>
    )
}
