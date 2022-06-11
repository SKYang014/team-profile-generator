const Intern = require ('../lib/Intern')


test('created an Intern object', () => {
    const intern = new Intern('Sarah', 'asdf@gmail.com', 'university', 5);


    expect(intern.getName()).toBe('Sarah');
    expect(intern.getSchool()).toBe('university');
    expect(intern.getRole()).toBe('Intern')
    expect(intern.getId()).toEqual(expect.any(Number))
});