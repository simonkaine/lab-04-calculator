// IMPORT MODULES under test here:
import { hypotenuseTest } from '../calculations.js';
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';
import { division } from '../calculations.js';
import { modulo } from '../calculations.js';
import { integerDivision } from '../calculations.js';


const test = QUnit.test;

// name your test by what it is testing
test('test hypotenuse', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hypotenuseTest(8, 6); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('test add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 2); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('test subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(10, 5); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('test multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(5, 5); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('test division', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(14, 2); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('test modulo', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = modulo(11, 2); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('test Integer Division', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = integerDivision(33, 5); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});