import React from 'react'
import {FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin

} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='bg-black'>
            <div className='max-w-[1200px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 gap-5'>
            
            <div className=''>
                <h1 className='uppercase text-[#00df9a] font-bold'>react.</h1>
                <p className='py-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eaque </p>
                <div className='flex justify-between'>
                        < FaFacebookSquare  size={30}/>
                        <FaInstagram size={30}/>
                        <FaTwitterSquare size={30} />
                        <FaLinkedin size={30} />


                </div>
            </div>
            <div className='flex justify-between lg:col-span-2 mt-5 text-xs sm:text-sm'>
            <div>
                <h6 className='text-gray-400 font-medium'>Solutions</h6>
                <ul>
                    <li className='py-2 '><a>Analytics</a></li>
                    <li  className='py-2 '><a>Marketing</a></li>
                    <li className='py-2 '><a>Commerce</a></li>
                    <li className='py-2 '><a>Insights</a></li>
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400 font-medium'>Support</h6>

                <ul>
                    <li  className='py-2 '><a>Pricing</a></li>
                    <li className='py-2 '><a>Documentation</a></li>
                    <li className='py-2 '><a>Guides</a></li>
                    <li className='py-2 '><a>API Status</a></li>
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400 font-medium'>Company</h6>

                <ul>
                    <li  className='py-2 '><a>About</a></li>
                    <li className='py-2 '><a>Blog</a></li>
                    <li className='py-2 '><a>Jobs</a></li>
                    <li className='py-2 '><a>Press</a></li>
                    <li className='py-2 '><a>Partners</a></li>

                </ul>
            </div>
            <div>
                <h6 className='text-gray-400 font-medium'>Legal</h6>

                <ul>
                    <li  className='py-2 '><a>Claim</a></li>
                    <li className='py-2 '><a>Policy</a></li>
                    <li className='py-2 '><a>Terms</a></li>
                    

                </ul>
            </div>

            </div>
        
    </div>
        </div>
    )
}


export default Footer;