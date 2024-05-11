import { useState } from "react"

export default function ProjectItem({name = "ProjectName", href ="#"}  : {name: string, href:string}){

    const [active, setActive] = useState(false)

    function changeDiv(){
        setActive(!active)
    }


    return (
        <div className="cursor-pointer h-fit bg-contain w-6/12 border-[#575757]" style={{backgroundImage: active ? 'url(https://ujjrahctcfbuydtpemhr.supabase.co/storage/v1/object/public/images/5000ea0e-9629-4f52-9d22-8480cfb26c7a-0.09714969976080301.png?t=2024-05-11T10%3A25%3A48.902Z)': null}} onMouseEnter={changeDiv} onMouseLeave={changeDiv}>
            <a href={href} className="w-full">
            <p className=" cursor-pointer text-4xl font-regular p-6 text-center align-middle">{name}</p>
            <div className={`bg-[#575757] h-1   m-0 ${active ? 'w-full p-[2px]' : 'w-0 '} transition-all duration-300`}> </div>
            </a>
        </div>
        
    )
}