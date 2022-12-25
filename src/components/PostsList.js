import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setStorePosts, editPost } from '../redux/masterSlice';
import { useSelector } from 'react-redux';
import Post from './Post';
import { DB } from '../firebase/db';

/**
 * Компонент инициирует загрузку и рендерит список элементов.
 * Отвечает за удаление и редактирование элементов.
 */
export default function PostsList() {

    const state = useSelector((state) => state.master);

    const dispatch = useDispatch();

    const loader = useCallback(() => {
        const loaderDB = DB.loadPosts();

        loaderDB.then(data => { dispatch(setStorePosts(data)) });
        loaderDB.then(data => console.log(data));
    }, [dispatch]);

    const handleDeletePost = (id) => {
        const deleteDB = DB.deletePost(id);
        deleteDB.then(setTimeout(() => { loader() }, 1000))
    };

    const handleEditPost = (id, text) => {
        const editorDB = DB.updatePost(id, text);
        editorDB.then(dispatch(editPost({ id, content: text })));
    };

    useEffect(() => { loader() }, [loader]);

    return (
        <>
            {state.posts[0] && state.posts.map(post =>
                <Post
                    key={post.id}
                    content={post.content}
                    handleDeletePost={handleDeletePost}
                    handleEditPost={handleEditPost}
                    id={post.id} />)}
        </>

    )
}
