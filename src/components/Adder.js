import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStoreText } from '../redux/masterSlice';
import sendRequest from '../functions/sendRequest';

export default function Adder() {

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const addPost = () => {
        const adder = new Promise((resolve, reject) => {
            const newPost = { "content": text };
            const data = sendRequest(
                'POST',
                "https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
                newPost
            );
            resolve(data)
        })
        adder.then(data => console.log({ id: data.name, content: text }));
        adder.then(data => { dispatch(addStoreText({ id: data.name, content: text })) });
        adder.then(setText(""))
    };

    const enterDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log(text);
            addPost();
        }
    };

    return (
        <form>
            <input
                placeholder="Поиск"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                onKeyDown={(e) => enterDown(e)} />
        </form>
    )
}
