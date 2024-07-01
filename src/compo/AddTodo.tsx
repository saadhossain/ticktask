import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useAddTodoMutation } from '../features/api/apiSlice';
import { setIsModalOpen } from '../features/todo/todoSlice';
import Processing from './Processing';

const AddTodo = () => {
    const { isModalOpen } = useAppSelector((state) => state.todo);
    const [priority, setPriority] = useState<string>('');
    const [addTodo, { isLoading, isSuccess }] = useAddTodoMutation();
    const dispatch = useAppDispatch();
    const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const title = form.title.value;
        const todoData = {
            title,
            priority,
            isCompleted: false
        }
        addTodo(todoData);
        form.reset();
        setPriority('')
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(setIsModalOpen());
        }
    }, [isSuccess])
    return (
        <>
            {
                isModalOpen &&
                <div className={`w-full min-h-screen flex items-center justify-center fixed left-0 top-0 z-50 bg-gray-900 bg-opacity-60`}>
                    <div className='w-11/12 md:w-2/5  flex items-center bg-gray-600 text-white p-5 rounded-md relative'>
                        <button
                            onClick={() => dispatch(setIsModalOpen())}
                            className='absolute top-3 right-3 bg-gray-900 text-white  rounded-full py-1 px-3 font-bold'>X</button>
                        <form onSubmit={handleAddTodo} className='py-5 w-full'>
                            <div>
                                <label htmlFor="title" className='block font-semibold'>Title</label>
                                <input type="text" name="title" id="title" className='w-full text-gray-900 p-2 rounded-md focus:outline-none' placeholder='Enter Todo Title' />
                            </div>
                            <div className='my-2'>
                                <label htmlFor="priority" className='block font-semibold'>Priority</label>
                                <select
                                    name="priority"
                                    id="priority"
                                    className="w-full text-gray-900 p-2 rounded-md focus:outline-none"
                                    value={priority}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value)}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>

                            </div>
                            <button type='submit' className='w-full py-2 px-16 rounded-md bg-primary text-white mt-5'>{isLoading ? <Processing title='Adding Todo' /> : 'Add Todo'}</button>
                        </form>

                    </div>
                </div>
            }
        </>
    )
}

export default AddTodo