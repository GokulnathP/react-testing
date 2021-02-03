import {useEffect, useState} from "react";
import {getImages} from "../services/getImages";

const useImages = () => {
    const [images, setImages] = useState([]);
    const [imagesLoading, setImagesLoading] = useState(true);

    useEffect(() => {
        getImages().then(images => {
            setImages(images);
            setImagesLoading(false);
        });
        // eslint-disable-next-line
    }, []);

    return {
        images: images,
        imagesLoading: imagesLoading
    };
}

export default useImages;