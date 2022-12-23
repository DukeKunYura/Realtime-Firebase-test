import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStoreText } from '../redux/masterSlice';
import { DB } from '../firebase/db';

export default function Adder() {

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const addPost = () => {
        const adder = DB.addPost(text);

        adder.then(data => console.log({ id: data.name, content: text }));
        adder.then(data => { dispatch(addStoreText({ id: data.name, content: text })) });
        adder.then(setText(""))
    };

    const enterDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            addPost();
        }
    };

    return (
        <form className='Form'>
            <input
                className='Input'
                placeholder="Введите текст и нажмите ENTER"
                maxLength={20}
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                onKeyDown={(e) => enterDown(e)} />
        </form>
    )
}
