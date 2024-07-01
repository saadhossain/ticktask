import { Outlet } from 'react-router-dom'
import Header from '../compo/Header'

const Main = () => {
  return (
    <div>
      <Header />
      <div className='w-11/12 md:w-8/12 mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main