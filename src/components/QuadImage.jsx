

function QuadImage(props){
    return(
        <div className='w-10/12 m-auto mt-5' >
            {props.title && <h3 className='font-inter font-semibold text-l mb-5 mt-16'>{props.title}</h3>}
            <div className="grid grid-cols-[3fr_1fr] gap-3">
                <img className="w-full h-full" src={props.img1}/>
                <div className="grid grid-rows-3 gap-2">
                    <img src={props.img2}/>
                    <img src={props.img3}/>
                    <img src={props.img4}/>
                </div>
            </div>
        </div>
    )
}

export default QuadImage;