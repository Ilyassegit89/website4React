import React from 'react'

const NewsLetter = () => {
    return(
        <div className='w-full py-16 text-white bg-black px-4'>
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-3 items-center'>
            <div className='lg:col-span-2'>   
                <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Want tips & tricks to optimize your flow ?</h2>
                <p> Sign up to our newsletter and stay up to date </p>
            </div>
           <div className='my-4'>
                    <div className='flex flex-col sm:flex-row justify-between items-center w-full'>   
                        <input className=' w-full rounded-md my-4 p-3 text-black'  type='text' placeholder='Enter your email '/>
                        <button className='bg-[#00df9a] rounded py-2  w-[150px] mx-auto  text-black sm:ml-4'>Notify me</button>
                    </div>
                    <p>We care about the protection  of your data .Read our <span className='text-[#00df9a]'>Privacy Policy .</span></p>
            </div>

        </div>
        </div>
        )
}

export default NewsLetter;