const Engineer = require("../lib/Engineer")

test("can set an instance of engineer", () => {
    const e = new Engineer()
    expect(typeof(e)).toBe("object") 
})
test("can set a username with the constructor", () => {
    const userName = "username"
    const e = new Engineer(userName)
    expect(e.gitHub).toBe(userName)
})

test("can get username with the get name function", () => {
    const userName = "username"
    const e = new Engineer(userName)
    expect(e.getGitHub()).toBe(userName)
})
