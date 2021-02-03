import React from "react";
import "../styles/ImageStytles.css";

const Image = ({image}) => {
    return (
        <div className="Image">
            <img className="Img" src={image.url} alt={image.title}/>
            <div className="TitleBar">
                <img className="Icon" src={image.thumbnailUrl} alt={image.title}/>
                <p className="Title">{image.title}</p>
            </div>
        </div>
    );
}

export default Image;