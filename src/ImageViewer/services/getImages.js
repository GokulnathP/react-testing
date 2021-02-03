import axios from "axios";

export const getImages = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return response.data.slice(0,20);
}