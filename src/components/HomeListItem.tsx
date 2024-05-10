export default function HomeListItem({name} : {name: string}){

    return (
        <div className="h-fit w-6/12 bg-white border-[#575757] hover:bg-stone-200">
            <p className="text-2xl font-medium p-3 text-left align-middle">{name}</p>
            <div className="bg-[#575757] h1- w-full p-[2px] m-0"></div>
        </div>
    )
}