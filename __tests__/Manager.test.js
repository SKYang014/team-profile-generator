const Manager = require ('../lib/Manager')


test('created a manager object', () => {
    const manager = new Manager('Sarah', 'Manager', 'skyang014@gmail.com');

    expect(manager.name).toBe('Sarah');
    expect(manager.office).toEqual(expect.any(Number))
    expect(manager.role).toBe('Manager')
})