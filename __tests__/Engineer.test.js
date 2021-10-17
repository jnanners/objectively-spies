const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
    const engineer = new Engineer("Bart", "ID", "bartsimpson@krusty.com", "b-simp");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("returns engineer name", () => {
    const engineer = new    Engineer("Bart", "ID", "bartsimpson@krusty.com", "b-simp");
    
    expect(engineer.getName()).toEqual("Bart");
})

test("returns engineer id", () => {
    const engineer = new    Engineer("Bart", "ID", "bartsimpson@krusty.com", "b-simp");
    
    expect(engineer.getId()).toEqual("ID");
})

test("returns engineer email", () => {
    const engineer = new    Engineer("Bart", "ID", "bartsimpson@krusty.com", "b-simp");
    
    expect(engineer.getEmail()).toEqual("bartsimpson@krusty.com");
})

test("returns users github", () => {
    const engineer = new    Engineer("Bart", "ID", "bartsimpson@krusty.com", "b-simp");

    expect(engineer.getGithub()).toEqual(`b-simp`);
})

test("returns engineer role", () => {
    const engineer = new    Engineer("Bart", "ID", "bartsimpson@krusty.com", "b-simp");
    
    expect(engineer.getRole()).toEqual("Engineer");
})