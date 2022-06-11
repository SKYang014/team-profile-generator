const Employee = require ('../lib/Employee')


test('created an Employee object', () => {
    const employee = new Employee('Sarah', 'skyang014@gmail.com', 1);


    expect(employee.getName()).toBe('Sarah');
    expect(employee.getEmail()).toBe('skyang014@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getRole()).toBe('Employee');
    }
    


    )