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
   
    function displayNav(){
        setDisplay(!display)
        console.log("clicked")
    }

    return(
        <header className= {`z-10  fixed top-0 w-full h-16 transition-colors duration-300 ${color ? 'lg:bg-violet-100' : 'bg-transparent'}`}>
            <div className="w-full lg:w-8/12 m-auto">
            <div className={`hidden lg:flex lg:justify-between lg:h-16 lg:max-w-screen-xxl lg:m-auto lg:items-center lg:transition-colors lg:duration-300 `}>
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
            
            <div className='lg:hidden bg-white flex flex-col py-4  items-end justify-center relative'>
            <div className='w-full flex justify-between align-center'>
               <h2 className='inline align-middle px-10'>Pedro</h2>
            <a href="#" className="px-10" onClick={displayNav}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"/>
            </a>
            </div>
            <div className={`${display ? " flex pt-4 flex-col text-center w-screen h-screen m-auto poppins-semibold text-4xl gap-8 bg-white" : "hidden"}   lg:hidden`}>
                    <a  href="/#work" className='p-4  block  hover:text-black '>Work</a>
                    <a href="/about" className='p-4 block  hover:text-black' >About</a>
                    <a href="" className='p-4 block  hover:text-black '> Contact</a>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Nav;