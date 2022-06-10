const Engineer = require ('../lib/Engineer')


test('created an Engineer object', () => {
    const engineer = new Engineer('Sarah', 'skyang014', 'Engineer');


    expect(engineer.name).toBe('Sarah');
    expect(engineer.github).toBe('skyang014');
    expect(engineer.role).toBe('Engineer')
})