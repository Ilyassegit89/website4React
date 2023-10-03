import {React, useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";


export default function NavigationBar(){

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
    }

    return (
        <div className='text-white flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4  bg-[#030303] '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                <Link to="/">REACT</Link>
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer hover:text-[#00df9a] uppercase '>
                    <Link to='/'>Home</Link>
                </li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a] uppercase'>
                    <Link to='/About'>About</Link>
                </li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a] uppercase'>
                    <Link to="/Company">Company</Link>
                </li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a] uppercase'>
                    <Link to="/Ressources">Ressources</Link>
                </li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a] uppercase'>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}  /> }
            </div>
            <div className={ !nav ? 'fixed  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#00300] ease-in-out duration-500 bg-[#030303]' : 'fixed left-[-100%] ease-in-out duration-500'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4'>React.</h1>

                <ul className='uppercase p-4'>
                    <li className='p-4 cursor-pointer border-b  border-gray-600 hover:text-[#00df9a] hover:translate-x-2 '>Home</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600 hover:text-[#00df9a]  hover:translate-x-2'>About</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600  hover:text-[#00df9a] hover:translate-x-2'>Company</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600  hover:text-[#00df9a] hover:translate-x-2'>Ressources</li>
                    <li className='p-4 cursor-pointer border-b border-gray-600  hover:text-[#00df9a] hover:translate-x-2'>Contact</li>
                </ul>
            </div>
        </div>
    )
}