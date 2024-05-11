import { useState } from "react"
import { StrictMode } from "react"

export default function ProjectItem({
    name = "ProjectName", href ="#", 
    tags ="UX/UI, Branding, User Research",
    color, 
    img = "src/images/Boaty.png"
    }  : { 
    name: string, 
    href:string, 
    tags: string, 
    color: string,
    img: string
    }){

    const [active, setActive] = useState(false)

    function changeDiv(){
        setActive(!active)
    }


    return (
        <StrictMode>
        <div className="cursor-pointer h-fit text-center bg-cover w-6/12 border-[#575757] hover:text-left " style={{backgroundImage:active ? `url(${img})`: 'none'}} onMouseEnter={changeDiv} onMouseLeave={changeDiv}>
            <a href={href} className="w-full">
            <div className="p-6">
            <p className={`cursor-pointer text-4xl text-left font-regular align-middle`} style={{color: active ? `${color}` : '#000000'}}>{name}</p>
            <p className={`cursor-pointer text-2xl font-regular align-middle ${!active && 'hidden'} transition-all duration-300 `} style={{color: `${color}`}}>{tags}</p>
            </div>
            <div className={`h-1   m-0 ${active ? 'w-full p-[2px]' : 'w-0 '} transition-all duration-500`} style={{backgroundColor: `${color}`}}> </div>
            </a>
        </div>
        </StrictMode>
        
    )
}