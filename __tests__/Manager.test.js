const Manager = require ('../lib/Manager')


test('created a manager object', () => {
    const manager = new Manager('Sarah', 'skyang014@gmail.com', 12, 15);

    expect(manager.getName()).toBe('Sarah');
    expect(manager.getOffice()).toEqual(expect.any(Number))
    expect(manager.getRole()).toBe('Manager')
    expect(manager.getId()).toEqual(expect.any(Number))
    expect(manager.getEmail()).toBe('skyang014@gmail.com')
})