function Text(props){
    return(
        <div className='w-8/12 m-auto mt-16'>
            {props.title && <h3 className=' mb-3 font-inter font-semibold text-xl'>{props.title}</h3>}
            <div className='poppins-light text-lg text-justify'>
                    {props.content}
            </div>
        </div>
    )
}

export default Text;