import { saveAs } from "file-saver";

function Images(props) {
    const download = (image) => () => {
        saveAs(image.urls.full, `${image.id}.jpg`);
    };
    return (
        <div className="flex justify-center">
        <div className="m-7 lg:columns-4 md:columns-2 sm:columns-1">
            {props.images.map((image) => (
            <div id="image-container" key={image.id} className="relative justify-center border-4 border-dark-blue m-4 p-0 group">
                <img src={image.urls.small} alt={image.alt_description} className="m-0"/>
                <button className="absolute -translate-y-9 w-full opacity-0 group-hover:opacity-100 bg-coral text-lg font font-extrabold p-1" onClick={download(image)}>
                    Download
                </button>
            </div>
            ))}
        </div>  
        </div>
    )
}

export default Images;