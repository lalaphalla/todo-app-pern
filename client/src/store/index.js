import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {title: '', description: ''};
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{
        addTask(state,action){
            state = action.payload
        }
    }
})
const store = configureStore({
    reducer: taskSlice.reducer
})