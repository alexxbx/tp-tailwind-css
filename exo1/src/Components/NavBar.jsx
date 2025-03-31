import React, { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='flex justify-between items-center px-6 w-full h-[103px] bg-[#8f8f8e] shadow-[0px_10px_30px_10px_rgba(0,0,0,0.15)]'>
            <img src='/téléchargement.jpeg' alt='logo' className='w-16 h-16' />

            <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                <div className='w-6 h-1 bg-white mb-1'></div>
                <div className='w-6 h-1 bg-white mb-1'></div>
                <div className='w-6 h-1 bg-white'></div>
            </button>

            <nav className={`absolute top-[103px] left-0 w-full bg-[#8f8f8e] shadow-md flex flex-col items-center space-y-4 py-4 transition-all duration-300 opacity-${isOpen ? '100' : '0'} lg:opacity-100 lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:w-auto lg:bg-transparent lg:shadow-none`}>
                <a href='' className='text-white'>Home</a>
                <a href='' className='text-white'>About</a>
                <a href='' className='text-white'>Services</a>
                <a href='' className='text-white'>Contact</a>
                <img src='search.svg' alt='search' className='w-6 h-6' />
            </nav>
        </header>
    );
}

export default NavBar;