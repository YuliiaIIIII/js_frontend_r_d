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

//Return increment and decrement value
describe("Check if the increment/decrement function increases/decreased the value of the argument by one", () => {
    const desc = "<p>Check if the value of the argument was increased or decreased by one</p>";

    describe(desc, () => {
        it("Value of the argument increased by 1", () => {
            const accumulator = new Accumulator(1);
            accumulator.increment();
            expect(accumulator.value).toBe(2);
        });
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
        it("Should clear the value after value was increased", () => {
            let object = new CancelableAccumulator(100);
            object.increment();
            object.clear();
            expect(object.value).toBe(100);
        });
        it("Should clear the value after value was decreased", () => {
            let object = new CancelableAccumulator(100);
            object.decrement();
            object.clear();
            expect(object.value).toBe(100);
        });
    });
});


////////////////////////lesson28
//task 1
//Check toggle
describe("Function toggle should to add or remove class", () => {
    const desc = "<p>Should to add or remove class</p>";
    describe(desc, () => {
        let body = document.querySelector('body');
        let div = document.createElement('div');
        body.appendChild(div);
        it("Should to add class", () => {
            div.classList.toggle('new-class');
            expect(div.classList.contains('new-class')).toBe(true);
        });
        it("Should to remove class", () => {
            div.classList.toggle('new-class');
            expect(div.classList.contains('new-class')).toBe(false);
        });
    });
});

//Check scrollIntoView
describe('Should call scrollIntoView on element with id "letterS"', () => {
    const desc = "<p>Call scrollIntoView method on keydown event</p>";
    describe(desc, () => {
        it('Method scrollIntoView was called on the element with id "letterS"', () => {
            const div = document.createElement('div');
            div.setAttribute ('id','letterS');
            document.body.appendChild(div);
            
            const event = new KeyboardEvent('keydown', {key: 's'});
            
            spyOn(div, 'scrollIntoView');
            document.dispatchEvent(event);
            expect(div.scrollIntoView).toHaveBeenCalled();
        });
    });
});

//Check scrollIntoView with true
describe('Should call scrollIntoView on element with id "letterS" with true', () => {
    const desc = "<p>Call scrollIntoView method on keydown event with true</p>";
    describe(desc, () => {
        it('Method scrollIntoView was called with true when key "s" or "S" is pressed', () => {
            const div = document.createElement('div');
            div.setAttribute ('id','letterS');
            document.body.appendChild(div);
            let element = document.querySelector("#letterS");

            spyOn(element, 'scrollIntoView');
            
            let eventSmallS = new KeyboardEvent('keydown', {'key': 's'});
            let eventS = new KeyboardEvent('keydown', {'key': 'S'});
            
            document.dispatchEvent(eventSmallS);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
            document.dispatchEvent(eventS);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);

        });

        it('Method scrollIntoView was called with true when key "h" or "H" is pressed', () => {
            const div = document.createElement('div');
            div.setAttribute ('id','letterH');
            document.body.appendChild(div);
            let element = document.querySelector("#letterH");

            spyOn(element, 'scrollIntoView');

            let eventSmallH = new KeyboardEvent('keydown', {'key': 'h'});
            let eventH = new KeyboardEvent('keydown', {'key': 'H'});
            
            document.dispatchEvent(eventSmallH);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
            document.dispatchEvent(eventH);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
        });

        it('Method scrollIntoView was called with true when key "w" or "W" is pressed', () => {
            const div = document.createElement('div');
            div.setAttribute ('id','letterW');
            document.body.appendChild(div);
            let element = document.querySelector("#letterW");

            spyOn(element, 'scrollIntoView');

            let eventSmallW = new KeyboardEvent('keydown', {'key': 'w'});
            let eventW = new KeyboardEvent('keydown', {'key': 'W'});
            
            document.dispatchEvent(eventSmallW);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
            document.dispatchEvent(eventW);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
        });

        it('Method scrollIntoView was called with true when key "e" or "E" is pressed', () => {
            const div = document.createElement('div');
            div.setAttribute ('id','letterE');
            document.body.appendChild(div);
            let element = document.querySelector("#letterE");

            spyOn(element, 'scrollIntoView');

            let eventSmallE = new KeyboardEvent('keydown', {'key': 'e'});
            let eventE = new KeyboardEvent('keydown', {'key': 'E'});
            
            document.dispatchEvent(eventSmallE);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
            document.dispatchEvent(eventE);
            expect(element.scrollIntoView).toHaveBeenCalledWith(true);
        });
    });
});