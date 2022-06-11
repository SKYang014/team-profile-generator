const Engineer = require ('../lib/Engineer')


test('created an Engineer object', () => {
    const engineer = new Engineer('Sarah', 'skyang014@gmail.com', 'skyang014', 14, 1356);


    expect(engineer.getRole()).toBe('Engineer')
    expect(engineer.getId()).toEqual(expect.any(Number))
    expect(engineer.getEmail()).toBe('skyang014@gmail.com')
    expect(engineer.getGithub()).toBe('skyang014');

})