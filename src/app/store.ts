import { configureStore } from '@reduxjs/toolkit'
import { todoApiSlice } from '../features/api/apiSlice'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        [todoApiSlice.reducerPath]: todoApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store