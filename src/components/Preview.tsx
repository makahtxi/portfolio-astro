

export default function Preview(){
    return (
    <div className= "w-full h-full">
                <h1 className="text-4xl font-semibold mb-4">Project Title</h1>
                <div className="mb-4">
                    <div className="flex justify-between w-10/12 ">
                        <h2 className="text-lg font-medium">Type of Project</h2>
                        <p className="text-lg font-regular">Team Project</p>        
                    </div>
                    <div className="flex justify-between w-10/12">
                        <h2 className="text-lg font-medium">Year</h2>
                        <p className="text-lg font-regular">2021</p>        
                    </div>
                    <div className="flex justify-between w-10/12">
                        <h2 className="text-lg font-medium">Field</h2>
                        <p className="text-lg font-regular">EdTech</p>        
                    </div>
                </div>
                <h3 className="text-m text-justify w-10/12 mb-8">Upling is a mobile app that helps high school students figure their next steps after graduation.</h3>
                <div className="w-10/12 flex justify-center flex-wrap">
                    <div className="w-6/12 p-1">
                        <img
                        src="/src/images/upling/Upling.png"
                        alt="Image of Project"/>
                    </div>
                    <div className="w-6/12 p-1">
                        <img
                        src="/src/images/upling/Upling.png"
                        alt="Image of Project"/>
                    </div>
                    <div className="w-6/12 p-1">
                        <img
                        src="/src/images/upling/Upling.png"
                        alt="Image of Project"/>
                    </div>
                    <div className="w-6/12 p-1">
                        <img
                        src="/src/images/upling/Upling.png"
                        alt="Image of Project"/>
                    </div>
                </div>
            </div>
        )
}