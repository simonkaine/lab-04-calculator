// IMPORT MODULES under test here:
import { hypotenuseTest } from '../calculations.js';

const test = QUnit.test;


// name your test by what it is testing
test('test hypotenuse', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = (8**2 + 6**2); // use your function here
    const actual = Math.sqrt(sum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});