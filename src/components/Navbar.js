import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css'; 

function Navbar() {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Council", link: "/SAC" },
        { name: "Clubs", link: "/Clubs" },
        { name: "Event Calendar", link: "/Event" },
        { name: "Gallery", link: "/Gallery" },
        { name: "FAQ", link: "/FAQ" },
    ];

    let [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        if (window.innerWidth < 768) { 
            setOpen(false); 
        }
    };

    return (
        <div className='z-50 w-screen max-w-full absolute'>
            <div className='md:flex items-center justify-between text-indigo-900 bg-transparent py-4 md:px-10 px-7'>
                {/* Wrap logo with Link to navigate to home page */}
                <Link to="/" className='flex items-center' onClick={handleLinkClick}>
                    <img src={logo} alt="Milliken Logo" className='w-[4rem] font-bold cursor-pointer' />
                </Link>

                <ul>
                    {!open && (
                        <li>
                            <button onClick={() => setOpen(true)} className='text-3xl absolute right-6 top-4 cursor-pointer md:hidden'>
                                <IoMenu />
                            </button>
                        </li>
                    )}
                    {open && (
                        <li>
                            <button onClick={() => setOpen(false)} className='text-3xl absolute right-6 top-4 cursor-pointer md:hidden'>
                                <IoClose />
                            </button>
                        </li>
                    )}
                </ul>

                <ul className={`md:flex md:items-center md:pb-0 absolute md:static backdrop-blur md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${open ? 'top-14 fade-in' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-2xl md:my-0 my-7'>
                                <Link 
                                    to={link.link} 
                                    className='text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200'
                                    onClick={handleLinkClick} // Close on link click
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
        </div>
    );
}

export default Navbar;
