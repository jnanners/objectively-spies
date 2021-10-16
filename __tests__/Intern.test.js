const Intern = require("../lib/Intern");

test("creates Intern object", () => {
    const intern = new Intern("Bart", "ID", "bartsimpson@krusty.com", "school");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("returns intern name", () => {
    const intern = new    Intern("Bart", "ID", "bartsimpson@krusty.com", "school");
    
    expect(intern.getName()).toEqual("Bart");
})

test("returns intern id", () => {
    const intern = new    Intern("Bart", "ID", "bartsimpson@krusty.com", "school");
    
    expect(intern.getId()).toEqual("ID");
})

test("returns intern email", () => {
    const intern = new    Intern("Bart", "ID", "bartsimpson@krusty.com", "school");
    
    expect(intern.getEmail()).toEqual("bartsimpson@krusty.com");
})

test("returns inter school", () => {
    const intern = new    Intern("Bart", "ID", "bartsimpson@krusty.com", "school");
    
    expect(intern.getSchool()).toEqual("school");
})


test("returns intern role", () => {
    const intern = new    Intern("Bart", "ID", "bartsimpson@krusty.com", "school");
    
    expect(intern.getRole()).toEqual("Intern");
})