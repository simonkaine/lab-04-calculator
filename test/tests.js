// IMPORT MODULES under test here:
import { modulo } from '../calculations.js';

const test = QUnit.test;


// name your test by what it is testing
test('test modulo', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 19;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = (8**2 + 6**2); // use your function here
    const actual = Math.sqrt(sum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});