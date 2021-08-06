
let expect = require('chai').expect;
let validator = require('../validators/validatation');

describe('Calculation Test', () => {
    describe('Test Absolute Value', () => {
        it('should return positive value of given negative number', () => {
            expect(Math.abs(-100)).to.be.equal(100);
        })
    });
    describe('Validate inNumValid() Method', () => {
        it('should return true if number is greater than 120', () => {
            expect(validator.isNumValid(120)).to.be.true;
        });
        it('should return true if number is less than 120', () => {
            expect(validator.isNumValid(-100)).to.be.true;
        });
        it('should return true if number is 100', () => {
            expect(validator.isNumValid(100)).to.be.false;
        });
    })
})

