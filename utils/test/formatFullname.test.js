const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
    it('should return an error if "fullName" arg is empty', () => {
        expect(formatFullname([])).to.equal('Error');
    })
    it('should return an error if "fullName" is not a string', () => {
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    })
    it('should return an error if "fullName" arg is more than 2 words', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('John Doe Test')).to.equal('Error');
    })

    it('should return an correct FullName', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('jOhN DOE')).to.equal('John Doe');
    })
})
