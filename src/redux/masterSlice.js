import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    idEditingPost: "",
    medications: []
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setStorePosts: (state, action) => {
            state.posts = action.payload.reverse()
        },
        addStorePost: (state, action) => {
            state.posts = [action.payload, ...state.posts];
        },
        editPost: (state, action) => {
            state.posts = state.posts.filter(item => item.id !== action.payload.id);
            let post = action.payload;
            state.posts = [post, ...state.posts]
        },
        setIdEditingPost: (state, action) => {
            state.idEditingPost = action.payload
        }
    }
});

export const { setStorePosts, addStorePost, setIdEditingPost, editPost } = masterSlice.actions;

export default masterSlice.reducer