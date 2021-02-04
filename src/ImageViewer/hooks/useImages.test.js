import {renderHook} from "@testing-library/react-hooks";
import {when} from "jest-when";
import useImages from "./useImages";
import {getImages} from "../services/getImages";

jest.mock("../services/getImages");

beforeEach(() => {
    when(getImages).calledWith().mockResolvedValue([1, 2]);
});

describe("useImages", () => {

    it('Should return image loading true', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useImages());

        expect(result.current.images).toEqual([]);
        expect(result.current.imagesLoading).toEqual(true);

        await waitForNextUpdate();
    });

    it('Should return image loading false after useeffect executed', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useImages());

        await waitForNextUpdate();

        expect(result.current.images.length).toEqual(2);
        expect(result.current.imagesLoading).toEqual(false);
    });
});