function ProjectTitle(props){
    return(
        <div className='w-8/12 m-auto'>
            <h1 className="text-5xl font-inter font-bold mb-2">{props.title}</h1>
            <div className='flex '>
                {props.tags.map((x) => 
                    <p key={x} className="py-2 rounded-xl font-inter font-semibold mr-4">{x}</p>
                )}
                {/* <p className="p-2 rounded-xl font-inter font-semibold mr-4">ux/ui design</p>
                <p className="p-2 rounded-xl font-inter font-semibold mr-4">user testing</p>
                <p className="p-2 rounded-xl font-inter font-semibold mr-4">user research</p> */}
            </div>
        </div>
    )
}

export default ProjectTitle;