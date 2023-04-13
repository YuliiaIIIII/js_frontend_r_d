describe("Check user event", () => {
    const desc = "<p>Check if button was clicked</p>";

    describe(desc, () => {
        it("Check if button was clicked", () => {
            spyOn(console, 'log');
            onClick({
                target: 'button'
            });
            expect(console.log).toHaveBeenCalled();
        });
    });
});

/////////////////////////////////////

describe("Check the total sum if array consist only of positive numbers", () => {
    const desc = "<p>Check the total sum (only for array with positive numbers)</p>";

    describe(desc, () => {
        it("Should count the total sum (only for array with positive numbers)", () => {
            const array = [10, 5, 0, 75, 3, 45];
            const result = getSum (array);
            expect(result).toBe(138);
        });
    });
});

describe("Check the total if the array contains negative numbers", () => {
    const desc = "<p>Check the total if the array contains negative numbers</p>";

    describe(desc, () => {
        it("Should count the total sum (for array with negative numbers)", () => {
            const array = [10, 5, -8, 0, 75, -50, 3, 45, -30];
            const result = getSum (array);
            expect(result).toBe(50);
        });
    });
});

describe("Check sum if array is empty", () => {
    const desc = "<p>Check sum if array is empty</p>";

    describe(desc, () => {
        it("Should check the sum = 0 if array is empty", () => {
            const array = [];
            const result = getSum (array);
            expect(result).toBe(0);
        });
    });
});

describe("Check the total sum if array consist of different types of values", () => {
    const desc = "<p>Check the total sum (different types of values)</p>";

    describe(desc, () => {
        it("Should count the total sum of numbers in array", () => {
            const array = ["test", 10, 5, "test2", 0, 75, null, true, 3, 45];
            const result = getSum (array);
            expect(result).toBe(138);
        });
    });
});

/////
describe("Check if the function returns a maximum value from array", () => {
    const desc = "<p>The function returns a maximum value from array</p>";

    describe(desc, () => {
        it("Should returns a maximum value", () => {
            const arr = [10, 5, 0, 75, 3, 45];
            const result = maxValueFn(arr);
            expect(result).toBe(75);
        });
    });
});

describe("Check if the function returns a minimum value from array", () => {
    const desc = "<p>The function returns a minimum value from array</p>";

    describe(desc, () => {
        it("Should returns a minimum value", () => {
            const arr = [10, 5, 0, 75, 3, 45];
            const result = minValueFn(arr);
            expect(result).toBe(0);
        });
    });
});


/////
describe("Call the symbolTriangle function", function() {
    const desc = "<p>Call the symbolTriangle function</p>";
    describe(desc, () => {
        it("Should be called the symbolTriangle function", function() {
            spyOn(window, "symbolTriangle");
            symbolTriangle();
            expect(symbolTriangle).toHaveBeenCalled();
        });
    });
});

describe("Call the symbolTriangle function with argument '#'", function() {
    const desc = "<p>Call the symbolTriangle function with argument '#'</p>";
    describe(desc, () => {
        it("Should be called the symbolTriangle function with argument '#'", function() {
        spyOn(window, "symbolTriangle");
        symbolTriangle("#");
        expect(window.symbolTriangle).toHaveBeenCalledWith("#");
        });
    });
});