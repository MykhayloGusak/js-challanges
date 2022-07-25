const { sortNumbers, getUniqueValues, countProvidedValues, } = require('./challenges')

describe('Challenge tests', function () {

    describe('Challenge #1 => sortNumbers(number[])', function () {

        it('should return sorted array of numbers', function () {
            // Arrange
            const listOfNumbers = [3, 5, 1, 2]

            // Act
            const result = sortNumbers(listOfNumbers)

            // Assert
            expect(result).toEqual([1, 2, 3, 5])
        });

        it('should return sorted array of numbers', function () {
            // Arrange
            const listOfNumbers = [33, 33, 1, 1, 20, 0, -1, -5]

            // Act
            const result = sortNumbers(listOfNumbers)

            // Assert
            expect(result).toEqual([-5, -1, 0, 1, 1, 20, 33, 33])
        });

        it('should return sorted array of numbers', function () {
            // Arrange
            const listOfNumbers = [10, -Infinity, 0, -10, Infinity]

            // Act
            const result = sortNumbers(listOfNumbers)

            // Assert
            expect(result).toEqual([-Infinity, -10, 0, 10, Infinity])
        });
    });

    describe('Challenge #2 => getUniqueValues(string|number[])', function () {

        it('should return unique values from originally provided list', function () {
            // Arrange
            const listOfValues = ["one", "two", "one", "three", "three"]

            // Act
            const result = getUniqueValues(listOfValues)

            // Assert
            expect(result).toEqual(
                expect.arrayContaining(["one", "two", "three"]),
            );
            expect(result).toHaveLength(3)
        });



        it('should return unique values from originally provided list', function () {
            // Arrange
            const listOfValues = ["one", 1, "oNe", 22, "two", "tWo", 2, 22, 1, , "one", 11, 1, "tWo"]

            // Act
            const result = getUniqueValues(listOfValues)

            // Assert
            expect(result).toEqual(
                expect.arrayContaining(["one", "oNe", "two", "tWo", 2, 22, 1, 11]),
            );
            expect(result).toHaveLength(8)
        });

        it('should return unique values from originally provided list', function () {
            // Arrange
            const listOfValues = [1, "one", "one", "one", -1, 1, 2, "2", 0, true]

            // Act
            const result = getUniqueValues(listOfValues)

            // Assert
            expect(result).toEqual(
                expect.arrayContaining([1, 0, -1, 2, "2", "one", true]),
            );
            expect(result).toHaveLength(7)
        });
    });

    describe('Challenge #3 => countProvidedValues(string|number[])', function () {
        // object = { key: value }  
        // ex: ["value1", "value2", "value2"] => { value1: 1, value2: 2}

        it("should return an object where the key is the originally provided value and the value is the time it appears in the provided list of values ", function () {
            // Arrange
            const listOfValues = ["one", "two", "one", "three", "three"]

            // Act
            const result = countProvidedValues(listOfValues)

            // Assert
            expect(result).toEqual({ "one": 2, "two": 1, "three": 2 });
        });


        it('should return unique values from originally provided list', function () {
            // Arrange
            const listOfValues = ["one", 1, "oNe", 22, "two", "tWo", 2, 22, 1, "one", 11, 1, "tWo"]

            // Act
            const result = countProvidedValues(listOfValues)

            // Assert
            expect(result).toEqual({ one: 2, oNe: 1, two: 1, tWo: 2, 1: 3, 2: 1, 11: 1, 22: 2 });
        });

        it('should return unique values from originally provided list', function () {
            // Arrange
            const listOfValues = [1, "one", "one", "one", 1, 2, "2", 0, "true"]

            // Act
            const result = countProvidedValues(listOfValues)

            // Assert
            expect(result).toEqual({ 0: 1, 1: 2, 2: 2, true: 1, one: 3, });
        });
    });
});