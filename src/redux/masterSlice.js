import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isActiveAdderWindow: false,
    categories: ["антибиотики", "анальгетики", "витамины", "спазмальгетики", "hvhjg444jh", "jfhj44kjkl",
        "vgvjhg2kjh", "ghg99jh", "hhj787kjkj", "g4hgh", "hvhjgjh", "jfhjkjkl", "vgvjhgkfrjh", "ghgjggh",
        "hhjkjkj", "ghgh", "ytjhgj"],
    medications: []
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setStoreText: (state, action) => {
            state.text = action.payload
            console.log(action.payload)
        },
        setStorePosts: (state, action) => {
            state.posts = action.payload
        },
        addStoreText: (state, action) => {
            state.posts = [action.payload, ...state.posts];
        },
        editMedication: (state, action) => {
            state.medications = state.medications.filter(item => item.id !== action.payload.id)
            let medication = action.payload.values;
            medication.id = action.payload.id;
            state.medications = [medication, ...state.medications];
            console.log(medication);
        },
        deleteMedication: (state, action) => {
            state.medications = state.medications.filter(item => item.id !== action.payload)
        },
        setIsActiveAdderWindow: (state, action) => {
            state.isActiveAdderWindow = action.payload
        },
        addCategory: (state, action) => {
            state.categories = [...state.categories, action.payload]
        }
    }
});


export const {
    setStoreText,
    setStorePosts,
    addStoreText,
    editMedication,
    setIsActiveAdderWindow,
    addCategory,
    deleteMedication } = masterSlice.actions;

export default masterSlice.reducer