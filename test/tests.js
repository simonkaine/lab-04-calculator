// IMPORT MODULES under test here:
import { IntegerDivision } from '../calculations.js';

const test = QUnit.test;


// name your test by what it is testing
test('test integer division', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 36.5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const sum = (8**2 + 6**2); // use your function here
    // const actual = Math.sqrt(sum);
    const actual = Math.floor(1212 / 33)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});