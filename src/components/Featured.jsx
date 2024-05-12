

function Featured(props){

    return(
        <div className="w-9/12 m-auto flex justify-between">
            <a href={{pathname: props.prev}}><h3 className="text-inter font-semibold text-xl mb-20">Previous Project</h3></a>
            <a href={{pathname: props.prev}}><h3 className="text-inter font-semibold text-xl mb-20">Next Project</h3></a>
        </div>

    )
}

export default Featured;