import { createSlice } from '@reduxjs/toolkit'

export interface InitialState {
    isModalOpen: boolean
}
export const initialState: InitialState = {
    isModalOpen: false
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setIsModalOpen: (state) => {
            state.isModalOpen = !state.isModalOpen
        }
    }
})

export const { setIsModalOpen } = todoSlice.actions;

export default todoSlice.reducer;