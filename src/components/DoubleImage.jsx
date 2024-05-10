

function DoubleImage(props){
    return(
    <div className='w-full m-auto mb-4'>
        <div className="grid grid-cols-2 gap-2">
            <img className="mt-5"src={props.img1}/>
            <img className="mt-5"src={props.img2}/>
        </div>
    </div>
)
}

export default DoubleImage;