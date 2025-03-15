import { useState } from "react"

export default function HomeListItem({name = "title", href ="#"}  : {name: string, href:string}){

    const [active, setActive] = useState(false)

    function changeDiv(){
        setActive(!active)
    }


    return (
        <div className="cursor-pointer h-fit w-6/12  border-[#575757] hover:bg-stone-200" onMouseEnter={changeDiv} onMouseLeave={changeDiv}>
            <a href={href} className="w-full">
            <p className=" cursor-pointer text-2xl font-medium p-3 text-center xl:text-left align-middle">{name}</p>
            <div className={`bg-[#575757] h-1   m-0 ${active ? 'w-full p-[2px]' : 'w-0 '} transition-all duration-300`}> </div>
            </a>
        </div>
        
    )
}