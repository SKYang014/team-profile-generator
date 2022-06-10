const Employee = require ('../lib/Employee')


test('created an Employee object', () => {
    const employee = new Employee('Sarah', 'skyang014@gmail.com');


    expect(employee.name).toBe('Sarah');
    expect(employee.email).toBe('skyang014@gmail.com');
    expect(employee.id).toEqual(expect.any(Number))
})