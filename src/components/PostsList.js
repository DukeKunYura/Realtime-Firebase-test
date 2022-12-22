import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStorePosts } from '../redux/masterSlice';
import { useSelector } from 'react-redux';
import sendRequest from '../functions/sendRequest';
import Post from './Post';

export default function PostsList() {

    const state = useSelector((state) => state.master);

    const dispatch = useDispatch();

    const loadPosts = () => {
        const loader = new Promise(function (resolve, reject) {
            const data = sendRequest(
                'GET',
                "https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
            )
            resolve(data)
        })
        loader.then(data => { dispatch(setStorePosts(data)) })

    };

    const deletePost = (id) => {
        const deleter = new Promise(function (resolve, reject) {
            sendRequest(
                'DELETE',
                `https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`
            )
            resolve()
        })
        deleter.then(setTimeout(loadPosts, 1000))

    };

    useEffect(() => { loadPosts() }, [state.text]);

    useEffect(() => {

        const loader = new Promise(function (resolve, reject) {
            const data = sendRequest(
                'GET',
                "https://testone-8ac4d-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
            )
            resolve(data)
        })
        loader.then(data => { dispatch(setStorePosts(data)) })
        loader.then(data => console.log(data))



    }, []);

    return (
        <>
            {state.posts[0] && state.posts.map(post =>
                <Post key={post.id} content={post.content} deletePost={deletePost} id={post.id} />)}
        </>

    )
}
