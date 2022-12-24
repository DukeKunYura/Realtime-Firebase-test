import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isActiveEditing: false,
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
            state.posts = action.payload.reverse()
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
        setIsActiveEditing: (state, action) => {
            state.isActiveEditing = action.payload
        }
    }
});


export const {
    setStoreText,
    setStorePosts,
    addStoreText,
    editMedication,
    setIsActiveEditing,
    deleteMedication } = masterSlice.actions;

export default masterSlice.reducer