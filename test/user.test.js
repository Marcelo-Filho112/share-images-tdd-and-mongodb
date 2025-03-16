const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)

const mainUser = {name: "Marcelo Manoel", email: "marcelolimafilho144@gmail.com", password: "12345678"}

//Executa antes da suíte de teste
beforeAll(() => {
    request.post("/user")
        .send(mainUser)
        .then(res => {})
        .catch(err => {console.log(err)})
})

//Executa no final da suíte de teste
afterAll(() => {
    request.delete(`/user/${mainUser.email}`)
        .then(res => {})
        .catch(err => {console.log(err)})
})

//Executa uma vez antes de cada teste
// beforeEach()

//Executa uma vez no final de cada teste
// afterEach()

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

    test("Deve impedir que um usuário se cadastre com os dados vazios", () => {
        const user = {name: "", email: "", password: ""}

        return request.post("/user")
            .send(user).then(res => {
                expect(res.statusCode).toEqual(400) //400 = Bad request
            }).catch(err => {
                throw err
            })
    })

    test("Deve impedir que um usuário se cadastre com um e-mail repetido",() => {
        const time = Date.now()
        const email = `${time}@gmail.com`
        const user = {name: "Marcelo", email: email, password: "12345678"}

        return request.post("/user")
            .send(user).then(res => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.email).toEqual(email)
                return request.post("/user")
                    .send(user).then(res => {
                        expect(res.statusCode).toEqual(400)
                        expect(res.body.error).toEqual("E-mail já cadastrado")
                    }).catch(err => {
                        throw err
                    })
            }).catch(err => {
                throw err
            })
    })

    // Outra maneira de testa a validação de e-mail usando async await
    // test("Deve impedir que um usuário se cadastre com um e-mail repetido", async () => {
    //     const time = Date.now()
    //     const email = `${time}@gmail.com`
    //     const user = { name: "Marcelo", email: email, password: "12345678" }
    
    //     // Cadastra o primeiro usuário
    //     const res1 = await request.post("/user").send(user)
    //     expect(res1.statusCode).toEqual(200)
    //     expect(res1.body.email).toEqual(email)
    
    //     // Tenta cadastrar o mesmo e-mail novamente
    //     const res2 = await request.post("/user").send(user)
    //     expect(res2.statusCode).toEqual(400)
    //     expect(res2.body.error).toEqual("E-mail já cadastrado")
    // })
})

describe("Autenticação",() => {
    test("Deve retornar um token quando logar",() => {
        return request.post("/auth")
        .send({email: mainUser.email, password: mainUser.password})
        .then(res => {
            expect(res.statusCode).toEqual(200)
            expect(res.body.token).toBeDefined()
        })
        .catch(err => {
            throw err
        })
    })

})