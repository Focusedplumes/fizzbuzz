const fizz_buzz = require('./fizz_buzz');


describe('FizzBuzz', () => {
 
    test('[15] should be fizzbuzz', () => {
        expect(fizz_buzz([15])).toBe('fizzbuzz')
    });

    test('[5] should be buzz', () => {
        expect(fizz_buzz([5])).toBe('buzz')
    });

    test('[3] should be fizz', () => {
        expect(fizz_buzz([3])).toBe('fizz')
    });
    
    test('[2] should be 2', () => {
        expect(fizz_buzz([2])).toBe('2')
    });

    
});
    

