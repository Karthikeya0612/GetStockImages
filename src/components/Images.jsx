function Images(props) {
    return (
        <div className="flex justify-center">
        <div className="m-7 lg:columns-4 md:columns-2 sm:columns-1">
            {props.images.map((image) => (
            <div key={image.id} className="flex justify-center border-4 border-dark-blue m-4 p-0">
                <img src={image.urls.small} alt={image.alt_description} className="m-0"/>
            </div>
            ))}
        </div>  
        </div>
    )
}

export default Images;