import {useNavigate} from 'react-router-dom'


function IntroPost() {
    const navigate = useNavigate();
    return (
        <div className="bg-white  rounded-xl w-[78%] hover:shadow-lg mx-auto ">
            <div className='grid grid-cols-1 cursor-pointer
            md:grid-cols-2 py-10  md:px-15 lg:px-10 gap-20'
                 onClick={() => navigate('blog-detail/')}>
                <img src="/images/hero.png" className='
        rounded-2xl object-cover w-fit h-full'/>
                <div className={"ml-4"}>
                    <h1 className='text-[38px] font-semibold text-[#012635] py-5'>A2P 10DLC: Everything you need to know
                        </h1>
                    <spam
                        className='text-green-500 bg-green-500/10 rounded-full px-4 py-1 uppercase  text-center'>OPERATIONS
                        MANAGEMENT
                    </spam>

                    <h4 className='line-clamp-6 text-gray-400 mt-8'>A2P 10DLC regulations may sound complex and
                        complicated, but the registration process is fairly simple. Compliance was initially optional
                        but has become a requirement as of August ...</h4>
                    <div className='flex items-center mt-5'>

                        <div className='ml-2'>
                            <h3 className='font-bold '>Anwar Bel</h3>
                            <h3 className='text-gray-500'>24 Sept 2024</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPost
