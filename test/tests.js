// IMPORT MODULES under test here:
import { division } from '../calculations.js';

const test = QUnit.test;


// name your test by what it is testing
test('test division', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2.4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = (5 / 2); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});