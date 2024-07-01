
const Processing = ({ title }: { title: string }) => {
    return (
        <div className='flex items-center gap-2 justify-center'>
            <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white"></div>
            <h5>{title}</h5>
        </div>
    )
}

export default Processing