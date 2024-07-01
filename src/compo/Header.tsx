import { Link } from 'react-router-dom'
import Logo from '../../public/logo.png'

const Header = () => {
    return (
        <div className='w-full py-2 bg-gray-200'>
            <div className='w-8/12 mx-auto flex items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={Logo} alt='TickTask' className='w-8 h-8' />
                    <h2 className='text-xl font-bold'>TickTask</h2>
                </Link>
                <Link to='/login' className='font-semibold text-white bg-primary py-2 px-10 rounded hover:bg-secondary duration-200 ease-in-out'>Login</Link>
            </div>
        </div>
    )
}

export default Header