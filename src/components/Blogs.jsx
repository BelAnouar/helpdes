import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blogs() {
  const navigate=useNavigate();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15 lg:px-32'>

        <div key='if' className='m-4 cursor-pointer rounded-2xl hover:shadow-sm' onClick={()=>navigate('blog-detail/')} >
           <img src='/images/bmg.jpg' className='w-full shadow-sm rounded-2xl
           object-cover h-[200px]'/>
            <div className={"py-5 px-2"}>
            <a className='font-semibold  text-[#012635]  '>title</a></div>
            <spam
                className='text-green-500 px-2 bg-green-500/10 rounded-full  py-1 uppercase  text-[13px] text-center'>OPERATIONS
                MANAGEMENT
            </spam>

           <h3 className='line-clamp-3 px-2 text-gray-400 mt-3'>lfklmkdsmlkfmldsk mlkfmldskmlfksmd</h3>
           <div className='flex px-2 items-center mt-5'>

            <div className='ml-2 mb-2'>

                <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
            </div>
        </div>
        </div>


    </div>
  )
}

export default Blogs
