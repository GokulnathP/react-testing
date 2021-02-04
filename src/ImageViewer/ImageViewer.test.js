import {render} from "@testing-library/react";
import ImageViewer from "./ImageViewer";
import {when} from "jest-when";
import useImages from "./hooks/useImages";

jest.mock("./hooks/useImages");
jest.mock("./components/Image", () => {
    return () => <div>Image</div>;
});

describe("ImageViewer", () => {

    it("Should render loading when image loading is true", () => {
        when(useImages).calledWith().mockReturnValue({
            images: [],
            imagesLoading: true,
        })
        const { queryByText } = render(<ImageViewer />);

        const loader = queryByText((content, element) => {
            return element.tagName === "DIV" && element.className === "Loader";
        });

        expect(loader).toBeInTheDocument();
    });

    it("Should not render loading when image loading is false", () => {
        when(useImages).calledWith().mockReturnValue({
            images: [],
            imagesLoading: false,
        })
        const { queryByText } = render(<ImageViewer />);

        const loader = queryByText((content, element) => {
            return element.tagName === "DIV" && element.className === "Loader";
        });

        expect(loader).not.toBeInTheDocument();
    });

    it("Should render image component 2 times", () => {
        when(useImages).calledWith().mockReturnValue({
            images: [{id: 1}, {id: 2}],
            imagesLoading: false,
        })
        const { queryAllByText } = render(<ImageViewer />);

        const imageComponents = queryAllByText("Image");

        expect(imageComponents).toHaveLength(2);
    });

});