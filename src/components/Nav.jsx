'use client';
import {useEffect, useState} from 'react'


function Nav(){

    const [color, changeColor] = useState(false)
    const [display, setDisplay] = useState(false)

    function swap(){
        if(scrollY>=56){
            changeColor(true)
        } else {
            changeColor(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", swap);

        return () => {
            window.removeEventListener("scroll", swap);

        }
    }, [])

    useEffect(() => {
        document.querySelector("#mobile-nav-btn").addEventListener("click", displayNav)
    }, [display]);

    function displayNav(){
        setDisplay(!display);
    }

    return(
        <header className= {`z-10  fixed top-0 w-full h-16 transition-colors duration-300 ${color ? 'lg:bg-violet-100' : 'bg-transparent'}`}>
            <div className="w-full lg:w-10/12 m-auto">
                <div className="w-11/12 m-auto">
                    <div id="mobile-nav" className={`hidden lg:flex lg:justify-between lg:h-16 lg:max-w-screen-xxl lg:m-auto lg:items-center lg:transition-colors lg:duration-300 `}>
                        <div className='flex text-gray-700 text-lg'>
                            <a href="/">
                            <h1>Pedro.</h1>
                            </a>
                        </div>
                        <nav className='flex text-gray-700 text-lg justify-between'>
                            <a  href="/projects" className='scroll-smooth p-4 hover:text-black '>Work</a>
                            <a href="/about" className='p-4 hover:text-black' >About</a>
                            <a href="#" className='p-4 hover:text-black '> Contact</a>
                        </nav>
                    </div>
                </div>
            
            <div className='lg:hidden bg-[#FFF3F3] flex flex-col py-4  items-end justify-center relative'>
            <div className='w-full flex justify-between align-center'>
               <h2 className='inline align-middle px-10'>Pedro</h2>
                <button id="mobile-nav-btn" className="px-10">
                    <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 6.9375C0 5.6584 1.02143 4.625 2.28571 4.625H29.7143C30.9786 4.625 32 5.6584 32 6.9375C32 8.2166 30.9786 9.25 29.7143 9.25H2.28571C1.02143 9.25 0 8.2166 0 6.9375ZM0 18.5C0 17.2209 1.02143 16.1875 2.28571 16.1875H29.7143C30.9786 16.1875 32 17.2209 32 18.5C32 19.7791 30.9786 20.8125 29.7143 20.8125H2.28571C1.02143 20.8125 0 19.7791 0 18.5ZM32 30.0625C32 31.3416 30.9786 32.375 29.7143 32.375H2.28571C1.02143 32.375 0 31.3416 0 30.0625C0 28.7834 1.02143 27.75 2.28571 27.75H29.7143C30.9786 27.75 32 28.7834 32 30.0625Z"
                            fill="black"/>
                    </svg>
                </button>
            </div>
                <div
                    className={`${display ? " flex pt-4 flex-col text-center w-screen h-screen m-auto poppins-semibold text-4xl gap-8 bg-[#FFF3F#]" : "hidden"}   lg:hidden`}>
                    <a href="/projects" className='p-4  block  hover:text-black '>Work</a>
                    <a href="/about" className='p-4 block  hover:text-black'>About</a>
                    <a href="/contact" className='p-4 block  hover:text-black '> Contact</a>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Nav;