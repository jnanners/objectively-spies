const Manager = require("../lib/Manager");

test("creates Manager object", () => {
    const manager = new Manager("Bart", "ID", "bartsimpson@krusty.com", 102);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("returns manager name", () => {
    const manager = new    Manager("Bart", "ID", "bartsimpson@krusty.com", 102);
    
    expect(manager.getName()).toEqual("Bart");
})

test("returns manager id", () => {
    const manager = new    Manager("Bart", "ID", "bartsimpson@krusty.com", 102);
    
    expect(manager.getId()).toEqual("ID");
})

test("returns manager email", () => {
    const manager = new    Manager("Bart", "ID", "bartsimpson@krusty.com", 102);
    
    expect(manager.getEmail()).toEqual("bartsimpson@krusty.com");
})

test("returns manager role", () => {
    const manager = new    Manager("Bart", "ID", "bartsimpson@krusty.com", 102);
    
    expect(manager.getRole()).toEqual("Manager");
})