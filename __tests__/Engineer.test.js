const engineer = require('../lib/Engineer.js');

test('Engineer object is created', () => {

    const engineer = new Engineer("Travis", "engineer@test.com", "Developer", 2, "Developer@github.com");

    expect(engineer.position).toBe("Developer");
});