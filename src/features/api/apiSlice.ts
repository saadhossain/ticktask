import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TodoTypes } from '../../types';

// Define a service using a base URL and expected endpoints
export const todoApiSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://todo-api-pied.vercel.app/' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<TodoTypes, []>({
            query: () => 'todos',
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (data: TodoTypes) => ({
                url: 'todos',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: (id: string) => ({
                url: `todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: (data) => ({
                url: `todos/${data.id}`,
                method: 'PUT',
                body: data.data
            }),
            invalidatesTags: ['Todos']
        })

    }),
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = todoApiSlice as any;