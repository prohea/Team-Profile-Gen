const Employee = require("../lib/Employee")

test("can set an instance of employee", () => {
    const e = new Employee()
    expect(typeof(e)).toBe("object") 
})
test("can set a name with the constructor", () => {
    const name = "Hope"
    const e = new Employee(name)
    expect(e.name).toBe(name)
})

test("can set id with the constructor", () => {
    const test = 100
    const e = new Employee("hi", test)
    expect(e.id).toBe(test)
})

test("can set email with the constructor", () => {
    const testEmail = "email@email.com"
    const e = new Employee("hi", 1, testEmail)
    expect(e.email).toBe(testEmail)
})
test("can get name with the get name function", () => {
    const name = "Hope"
    const e = new Employee(name)
    expect(e.getName()).toBe(name)
})