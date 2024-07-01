import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-16'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-200 text-gray-900">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login Now</h2>
                <div className="my-6 space-y-4">
                    <button type="button" className="flex items-center justify-center w-full p-4 space-x-4 rounded-md bg-primary text-white font-semibold text-lg">
                        <FaGoogle className='w-6 h-6' />
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login