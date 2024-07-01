import { Link } from 'react-router-dom'
import HomeBg from '../../public/home-bg.png'

const Home = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between my-5 md:my-12'>
            <div className='md:w-2/4'>
                <h2 className='text-5xl font-bold text-primary'>TickTask</h2>
                <h4 className='text-2xl font-semibold text-secondary'>Your Task Management App</h4>
                <p className='font-semibold mt-6'>TickTask is a user-friendly task management app where you can add tasks, mark them as complete, and delete them. It simplifies task organization, helping you stay productive and on top of your responsibilities.</p>
                <button className='mt-10 font-semibold text-white bg-primary py-2 px-10 rounded hover:bg-secondary duration-200 ease-in-out'><Link to='/todos'>Get Started</Link></button>
            </div>
            <div className='md:w-2/4'>
                <img src={HomeBg} alt='Home Background' />
            </div>
        </div>
    )
}

export default Home