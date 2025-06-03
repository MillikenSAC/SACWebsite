import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import '../styles/Navbar.css'; 

function Navbar() {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Council", link: "/SAC" },
        { name: "Clubs", link: "/Clubs" },
        { name: "Calendar", link: "/Event" },
        { name: "Gallery", link: "/Gallery" },
        { name: "FAQ", link: "/FAQ" },
    ];

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // check if user is scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false); 
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = () => {
        if (window.innerWidth < 768) { 
            setOpen(false); 
        }
    };

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={`z-50 w-full ${open ? 'fixed' : 'absolute'} top-0 transition-all duration-300 ease-in-out`}>
            <div className='md:flex items-center justify-between text-indigo-200 bg-transparent py-6 md:px-10 px-7'>
                
                {/* Logo */}
                <Link 
                    to="/" 
                    className={`flex items-center transition-opacity duration-500 ${open || scrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`} 
                    onClick={() => window.scrollTo(0, 0)} 
                >
                    <img 
                        src={logo} 
                        alt="Milliken Logo" 
                        className={`w-16 h-auto absolute left-4 top-4 transition-all ${open ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}
                    />
                </Link>

                {/* Mobile Menu Toggle */}
                <ul>
                    <li>
                        <button 
                            onClick={toggleMenu} 
                            className={`text-3xl fixed right-6 top-4 cursor-pointer md:hidden transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}
                        >
                            {open ? <IoClose /> : <IoMenu />}
                        </button>
                    </li>
                </ul>

                {/* Navigation Links */}
                <ul 
                    className={`md:flex md:items-center md:pb-0 md:static absolute backdrop-blur-lg bg-white/70 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${open ? 'top-0 opacity-100' : 'top-[-490px] md:top-auto md:opacity-100 opacity-0'}`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-2xl md:my-0 my-7'>
                            {/* Clubs Dropdown */}
                            {link.name === 'Clubs' ? (
                                <div 
                                    className='relative'
                                    onMouseEnter={handleDropdownToggle}
                                    onMouseLeave={handleDropdownToggle}
                                >
                                    <Link 
                                        to={link.link} 
                                        className='text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200'
                                        onClick={handleLinkClick} 
                                    >
                                        {link.name}
                                    </Link>
                                    {dropdownOpen && (
                                        <div className='absolute bg-white shadow-lg rounded-lg mt-2'>
                                            <Link 
                                                to='/Clubs'
                                                className='block text-indigo-900 p-2 hover:bg-indigo-900 hover:text-white'
                                            >
                                                List
                                            </Link>
                                            {/* anchor link for club resources */}
                                            <Link 
                                            to="/Clubs#club-resources" 
                                            className='block text-indigo-900 p-2 hover:bg-indigo-900 hover:text-white'
                                        >
                                            Resources
                                        </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link 
                                    to={link.link} 
                                    className='text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200'
                                    onClick={handleLinkClick} 
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
        </div>
    );
}

export default Navbar;
