const Intern = require('../lib/Intern');

test("can set an instance of intern", () => {
	const e = new Intern();
	expect(typeof e).toBe('object');
});
test('can set a school with the constructor', () => {
	const school = "UofU";
	const e = new Intern('English', 1, 'email@email.com', school);
	expect(e.school).toBe(school);
});
test('can get school with the get school function', () => {
	const school = 'UofU';
	const e = new Intern('English', 1, 'email@email.com', school);
	expect(e.getSchool()).toBe(school);
});
