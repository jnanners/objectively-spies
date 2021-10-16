const Employee = require("../lib/Employee")

test("ceates Employee Object", () => {
    const employee = new    Employee("Bart", "ID", "bartsimpson@krusty.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("returns employee name", () => {
    const employee = new    Employee("Bart", "ID", "bartsimpson@krusty.com");
    
    expect(employee.getName()).toEqual("Bart");
})

test("returns employee id", () => {
    const employee = new    Employee("Bart", "ID", "bartsimpson@krusty.com");
    
    expect(employee.getId()).toEqual("ID");
})

test("returns employee email", () => {
    const employee = new    Employee("Bart", "ID", "bartsimpson@krusty.com");
    
    expect(employee.getEmail()).toEqual("bartsimpson@krusty.com");
})

test("returns employee role", () => {
    const employee = new    Employee("Bart", "ID", "bartsimpson@krusty.com");
    
    expect(employee.getRole()).toEqual("Employee");
})
