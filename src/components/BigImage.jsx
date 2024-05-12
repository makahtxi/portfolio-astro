

function BigImage(props){
    return(
    <div className='w-10/12 m-auto mb-4'>
         {props.title && <h3 className='font-inter font-semibold text-l mb-5 mt-16'>{props.title}</h3>}
        <div className="flex justify-center items-center">
            <img className="mt-5"src={props.img}/>
        </div>
    </div>
)}

export default BigImage;