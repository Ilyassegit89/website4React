import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return(
            <div className='w-full bg-white py-[10rem] px-4'>
                <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='bg-white w-full shadow-xl flex flex-col my-4  p-4 hover:scale-105 duration-300 rounded-lg '>
                        <img src={Single} className='w-20 mx-auto mt-[-3rem]' alt="/" />
                        <h2 className='font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mt-8'>500GB Storage</p>
                            <p className='py-2 border-b'>1 Granted User</p>
                            <p className='py-2 border-b'>Send up to 2 GB</p>
                        </div>
                        <button type='button' className='font-medium bg-[#00df9a] w-[150px] mx-auto rounded my-6'>Start Trial</button>
                    </div>
                    <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 hover:scale-105 duration-300 my-8 md:my-0 rounded-lg'>
                        <img src={Double} className='w-20 mx-auto mt-[-3rem] bg-transparent' alt="/" />
                        <h2 className='font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mt-8'>500GB Storage</p>
                            <p className='py-2 border-b'>1 Granted User</p>
                            <p className='py-2 border-b'>Send up to 2 GB</p>
                        </div>
                        <button type='button'  className='font-medium bg-black text-[#00df9a] w-[150px] mx-auto rounded my-6'>Start Trial</button>
                    </div>
                    <div className='bg-white w-full shadow-xl flex flex-col my-4 p-4 hover:scale-105 duration-300 rounded-lg'>
                        <img src={Triple} className='w-20 mx-auto mt-[-3rem]' alt="/" />
                        <h2 className='font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mt-8'>500GB Storage</p>
                            <p className='py-2 border-b'>1 Granted User</p>
                            <p className='py-2 border-b'>Send up to 2 GB</p>
                        </div>
                        <button type='button'  className='font-medium bg-[#00df9a] w-[150px] mx-auto rounded my-6'>Start Trial</button>
                    </div>
                </div>
            </div>
    )
}


export default Cards;