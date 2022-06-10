const Manager = require ('../lib/Manager')


test('created a manager object', () => {
    const manager = new Manager('Sarah');


    expect(manager.name).toBe('Sarah');
    expect(manager.id).toEqual(expect.any(Number))
})