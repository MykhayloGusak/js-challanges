const { sortNumbers } = require('./challenges')

describe('Challenge tests', function () {
    describe('Challenge #1 => sortNumbers(number[])', function () {

        it('should return sorted array of numbers', function () {
            // Arrange
            const listOfNumbers = [3, 5, 1, 2]

            // Act
            const result = sortNumbers(listOfNumbers)
            console.log(result)
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
});