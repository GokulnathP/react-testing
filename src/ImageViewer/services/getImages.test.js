import {getImages} from "./getImages";
import axios from "axios";
import {when} from "jest-when";

jest.mock("axios");

describe("getImages", () => {

    it("Should return array of images", async () => {
        when(axios.get).calledWith("https://jsonplaceholder.typicode.com/photos").mockResolvedValue({data: []});

        const images = await getImages();

        expect(images.length).toEqual(0);
    });

});