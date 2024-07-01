import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useGetTodosQuery } from '../features/api/apiSlice';
import { setIsModalOpen } from '../features/todo/todoSlice';
import { TodoTypes } from '../types';
import Loading from './Loading';
import TodoCard from './TodoCard';

const Todos = () => {
    const { isLoading, data } = useGetTodosQuery();
    const { isModalOpen } = useAppSelector((state) => state.todo)
    const dispatch = useAppDispatch();
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold mb-5 border-l-4 border-primary pl-2'>Recent Todos</h2>
                <button
                    onClick={() => dispatch(setIsModalOpen())}
                    className={`py-2 px-5 rounded-md ${isModalOpen ? 'bg-gray-400' : 'bg-primary'} text-white font-semibold`}
                    disabled={isModalOpen}
                >Add ToDo</button>
            </div>
            <>
                {
                    isLoading ? <Loading /> : <>
                        {data?.map((todo: TodoTypes) => <TodoCard key={todo._id} todo={todo} />)}
                    </>
                }
            </>
        </>
    )
}

export default Todos