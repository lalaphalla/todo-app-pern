import { configureStore, createSlice } from '@reduxjs/toolkit'
import taskReduer from './task'

const store = configureStore({
    reducer: {task: taskReduer}
})

export default store