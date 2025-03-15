const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)

describe("Cadastro de usuário", () => {
    test("Deve cadastrar um usuário com sucesso", () => {
        const time = Date.now()
        const email = `${time}@gmail.com`
        const user = {name: "Marcelo", email: email, password: "12345678"}

        return request.post("/user")
            .send(user).then(res => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.email).toEqual(email)
            }).catch(err => {
                throw err
            })
    })
})