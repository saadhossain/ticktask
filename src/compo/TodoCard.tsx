import { FaDeleteLeft } from "react-icons/fa6";
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../features/api/apiSlice';
import { TodoTypes } from '../types';

const TodoCard = ({ todo }: { todo: TodoTypes }) => {
    const [deleteTodo] = useDeleteTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const handleDeleteTodo = (todoId: string | any) => {
        const confirmation = window.confirm('Do you want to delete?');
        if (confirmation) {
            deleteTodo(todoId)
        }
    }

    const handleUpdateTodo = (todoId: string | any) => {
        const data = { isCompleted: true };
        if (!todo.isCompleted) {
            updateTodo({ id: todoId, data: data })
        }
    }
    return (
        <div className='bg-gray-200 rounded-md p-5 mb-3 flex items-center gap-4 justify-between'>
            <div className='flex items-center gap-4'>
                <button onClick={() => handleUpdateTodo(todo._id)}>
                    {
                        todo.isCompleted ? <MdCheckBox className='w-6 h-6 text-green-700' /> : <MdCheckBoxOutlineBlank className='w-6 h-6 text-amber-500' />
                    }
                </button>
                <h4 className='text-lg'>{todo.title}</h4>
            </div>
            <div className='flex items-center gap-4'>
                <p className='flex items-center gap-1 font-semibold'>Priority: {todo.priority === 'High' ?
                    <FcHighPriority className='w-5 h-5' /> : todo.priority === 'Low' ? <FcLowPriority className='w-5 h-5' /> : <FcMediumPriority className='w-5 h-5' />
                }</p>
                <FaDeleteLeft
                    onClick={() => handleDeleteTodo(todo._id)}
                    className='w-6 h-6 text-red-600 cursor-pointer' />
            </div>
        </div>
    )
}
export default TodoCard;