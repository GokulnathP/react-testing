beforeAll(() => {
    console.log("Before all");
});

afterAll(() => {
    console.log("After all");
});

beforeEach(() => {
    console.log("Before each");
});

afterEach(() => {
    console.log("After each");
});

describe("Group of unit test", () => {

    it("Should unit test(using it)", () => {
        console.log("From it");
    });

    test("Should unit test(using test)", () => {
        console.log("From test");
    });

});