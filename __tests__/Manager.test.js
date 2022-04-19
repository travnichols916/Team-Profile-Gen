const Manager = require('../lib/Manager.js');

test('Manager object is created', () => {
    const manager = new Manager("Cyndi", "manager@test.com", "Manager", 1, 1);
    expect(manager.position).toBe("Manager");
});