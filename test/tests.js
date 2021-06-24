// IMPORT MODULES under test here:
import { subtract } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('test subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = (4 - 2); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
