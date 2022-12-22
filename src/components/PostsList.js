import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStorePosts } from '../redux/masterSlice';
import { useSelector } from 'react-redux';
import sendRequest from '../functions/sendRequest';
import Post from './Post';
import { DB } from '../firebase/db';

export default function PostsList() {

    const state = useSelector((state) => state.master);

    const dispatch = useDispatch();

    const loader = () => {
        const loaderDB = DB.loadPosts();

        loaderDB.then(data => { dispatch(setStorePosts(data)) });
        loaderDB.then(data => console.log(data));
    };

    const handleDeletePost = (id) => {
        const deleter = DB.deletePost(id);
        deleter.then(setTimeout(() => { loader() }, 1000))
    };

    useEffect(() => { loader() }, []);

    return (
        <>
            {state.posts[0] && state.posts.map(post =>
                <Post key={post.id} content={post.content} handleDeletePost={handleDeletePost} id={post.id} />)}
        </>

    )
}
