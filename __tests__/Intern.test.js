const intern = require('../lib/intern.js');

test('Intern object is created', () => {
    const intern = new Intern("Student", "student@test.com", "Intern", 3, "Coding Class");

    expect(intern.position).toBe("Intern");
});