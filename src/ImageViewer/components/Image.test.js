import {render} from "@testing-library/react";
import Image from "./Image";

describe("Image", () => {

    it("Should render 2 images", () => {
        const {getAllByAltText} = render(<Image image={{title: "title"}}/>);

        const imgTag = getAllByAltText("title");

        expect(imgTag.length).toEqual(2);
    });

    it('Should render title', () => {
        const { getByText } = render(<Image image={{title: "title"}}/>);

        const titleElement = getByText("title");

        expect(titleElement).toBeInTheDocument();
    });

});