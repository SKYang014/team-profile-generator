const Intern = require ('../lib/Intern')


test('created an Intern object', () => {
    const intern = new Intern('Sarah', 'university', 'Intern');


    expect(intern.name).toBe('Sarah');
    expect(intern.school).toBe('university');
    expect(intern.role).toBe('Intern')
});