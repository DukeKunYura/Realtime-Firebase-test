import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStorePosts } from '../redux/masterSlice';
import { useSelector } from 'react-redux';
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

    const EditPost = (id) => {
        const editor = DB.updatePost(id, "edited")
    };

    useEffect(() => { loader() }, []);

    return (
        <>
            {state.posts[0] && state.posts.map(post =>
                <Post
                    key={post.id}
                    content={post.content}
                    handleDeletePost={handleDeletePost}
                    EditPost={EditPost}
                    id={post.id} />)}
        </>

    )
}
