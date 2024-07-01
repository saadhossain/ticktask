import AddTodo from '../compo/AddTodo'
import Todos from '../compo/Todos'

const AllTodos = () => {
  return (
    <div className='my-5 md:my-12'>
      <Todos />
      <AddTodo />
    </div>
  )
}

export default AllTodos