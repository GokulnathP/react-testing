import React from "react";
import useImages from "./hooks/useImages";
import Image from "./components/Image";
import "./styles/ImageViewerStyles.css";

const ImageViewer = () => {
    const {images, imagesLoading} = useImages();

    if (imagesLoading) {
        return (
            <div className="Loader" />
        );
    }

    return (
        <div className="ImageViewer">
            {images.map(image => <Image key={image.id} image={image}/>)}
        </div>
    );
};

export default ImageViewer;