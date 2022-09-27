const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('can set an instance of manager', () => {
    const e = new Manager()
    expect(typeof(e)).toBe('object') 
});

test('can set a office number with the constructor', () => {
    const officeNumber = '18005555555'
    const e = new Manager('Charity', 1, 'email@email.com', officeNumber);
    expect(e.officeNumber).toBe(officeNumber)
});

test('can get office number with the get officeNumber function', () => {
    const officeNumber = '18005555555'
    const e = new Manager('Charity', 1, 'email@email.com',officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber)
});
