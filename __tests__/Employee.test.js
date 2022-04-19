const Employee = require("../lib/Employee");

test('employee object is created', () => {
    const employee = new Employee("Marcelo", "test@test.com", "Employee", 0);
    expect(employee.position).toBe("Employee");
});