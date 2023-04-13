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

////////////////////////lesson23
//task 1
//Check total sum of positive numbers
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

//Check total sum of negative numbers
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

//Check if array is empty
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

//Check the total sum of different types of values
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

//task 2
//Return max value
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

//Return min value
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


//task 3
//Call the function
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

//Call the function with argument
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

////////////////////////lesson26
//task 1
//Return error
describe("Check if function return error when the type of argument is not a number", () => {
    const desc = "<p>Check if function return error</p>";

    describe(desc, () => {
        it("Should to show an errore message in console", () => {
            spyOn(console, 'error');
            const accumulator = new Accumulator("test");
            expect(console.error).toHaveBeenCalledWith(`Only for numbers`);
        });
    });
});

//Return increment value
describe("Check if the increment function increases the value of the argument by one", () => {
    const desc = "<p>Check if the value of the argument was increased by one</p>";

    describe(desc, () => {
        it("Value of the argument increased by 1", () => {
            const accumulator = new Accumulator(1);
            accumulator.increment();
            expect(accumulator.value).toBe(2);
        });
    });
});

//Return decrement value
describe("Check if the decrement function decreases the value of the argument by one", () => {
    const desc = "<p>Check if the value of the argument was decreased by one</p>";

    describe(desc, () => {
        it("Value of the argument decreased by 1", () => {
            const accumulator = new Accumulator(1);
            accumulator.decrement();
            expect(accumulator.value).toBe(0);
        });
    });
});

//task 2
//Check if function create object
describe("Check if function create object", () => {
    const desc = "<p>Create an object</p>";

    describe(desc, () => {
        it("Should create an object", () => {
            const object = new CancelableAccumulator(100);
            const type = typeof(object);
            expect(type).toBe("object");
        });
    });
});

//Check if the function clear the value
describe("Check if the function clear the value", () => {
    const desc = "<p>Check if the function clear the value</p>";

    describe(desc, () => {
        it("Should clear the value", () => {
            let object = new CancelableAccumulator(100);
            object.value = 500;
            object.clear();
            expect(object.value).toBe(100);
        });
    });
});

//Check if the function clear the value after increases value
describe("Check if the function clear the value after value was increased", () => {
    const desc = "<p>Check if the function clear the value after increases</p>";

    describe(desc, () => {
        it("Should clear the value", () => {
            let object = new CancelableAccumulator(100);
            object.increment();
            object.clear();
            expect(object.value).toBe(100);
        });
    });
});

//Check if the function clear the value after value decreases
describe("Check if the function clear the value after value was decreased", () => {
    const desc = "<p>Check if the function clear the value</p>";

    describe(desc, () => {
        it("Should clear the value", () => {
            let object = new CancelableAccumulator(100);
            object.decrement();
            object.clear();
            expect(object.value).toBe(100);
        });
    });
});

////////////////////////lesson28
//task 1
//

