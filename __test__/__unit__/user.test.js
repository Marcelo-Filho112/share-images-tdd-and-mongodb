import { test, expect } from "vitest";

function sum(a, b) {
  return a + b
}

test("add 2 numbers",() => {
    expect(sum(2,3)).toEqual(5)
})

// import supertest from "supertest"
// import app from "../../src/app"
// import { test, expect, describe, beforeAll, afterAll, it } from "vitest"

// const request = supertest(app)
// const mainUser = {name: "Marcelo Manoel", email: "marcelolimafilho144@gmail.com", password: "12345678"}

// //Executa antes da suíte de teste
// beforeAll(async () => {
//     const res = await request.post("/user").send(mainUser)
//     if (res.statusCode !== 200) {
//       throw new Error(`Erro ao criar mainUser: ${res.statusCode}`)
//     }
//   })

// //Executa no final da suíte de teste
// afterAll(() => {
//     request.delete(`/user/${mainUser.email}`)
//         .then(res => {})
//         .catch(err => {console.log(err)})
// })

// //Executa uma vez antes de cada teste
// // beforeEach()

// //Executa uma vez no final de cada teste
// // afterEach()

// describe("Cadastro de usuário", () => {
//     it("Deve cadastrar um usuário com sucesso", async () => {
//         const time = Date.now()
//         const email = `${time}@email.com`
//         const user = { name: "User", email, password: "12345678" }

//         const res = await request.post("/user").send(user)   

//         expect(res.statusCode).toBe(200)
//         expect(res.body.email).toBe(email)
//     })
// })

// // test("Deve impedir que um usuário se cadastre com os dados vazios", () => {
// //     const user = {name: "", email: "", password: ""}

// //     return request.post("/user")
// //         .send(user).then(res => {
// //             expect(res.statusCode).toEqual(400) //400 = Bad request
// //         }).catch(err => {
// //             throw err
// //         })
// // })

// // test("Deve impedir que um usuário se cadastre com um e-mail repetido",() => {
// //     const time = Date.now()
// //     const email = `${time}@gmail.com`
// //     const user = {name: "Marcelo", email: email, password: "12345678"}

// //     return request.post("/user")
// //         .send(user).then(res => {
// //             expect(res.statusCode).toEqual(200)
// //             expect(res.body.email).toEqual(email)
// //             return request.post("/user")
// //                 .send(user).then(res => {
// //                     expect(res.statusCode).toEqual(400)
// //                     expect(res.body.error).toEqual("E-mail já cadastrado")
// //                 }).catch(err => {
// //                     throw err
// //                 })
// //         }).catch(err => {
// //             throw err
// //         })
// // })

// // // Outra maneira de testa a validação de e-mail usando async await
// // // test("Deve impedir que um usuário se cadastre com um e-mail repetido", async () => {
// // //     const time = Date.now()
// // //     const email = `${time}@gmail.com`
// // //     const user = { name: "Marcelo", email: email, password: "12345678" }

// // //     // Cadastra o primeiro usuário
// // //     const res1 = await request.post("/user").send(user)
// // //     expect(res1.statusCode).toEqual(200)
// // //     expect(res1.body.email).toEqual(email)

// // //     // Tenta cadastrar o mesmo e-mail novamente
// // //     const res2 = await request.post("/user").send(user)
// // //     expect(res2.statusCode).toEqual(400)
// // //     expect(res2.body.error).toEqual("E-mail já cadastrado")
// // // })

// describe("Autenticação",() => {
//     test("Deve retornar um token quando logar",() => {
//         return request.post("/auth")
//         .send({email: mainUser.email, password: mainUser.password})
//         .then(res => {
//             expect(res.statusCode).toEqual(200)
//             expect(res.body.token).toBeDefined()
//         })
//         .catch(err => {
//             throw err
//         })
//     })

//     test("Deve impedir que um usuário não cadastrado se logue",() => {
//         return request.post("/auth")
//         .send({email: "nãoexiste@email.com", password: "weakpassword"})
//         .then(res => {
//             expect(res.statusCode).toEqual(403)
//             expect(res.body.errors.email).toBe("E-mail não cadastrado")
//         })
//         .catch(err => {
//             throw err
//         })
//     })

//     test("Deve impedir que um usuário se logue com uma senha errada",() => {
//         return request.post("/auth")
//         .send({email: mainUser.email, password: "weakpassword"})
//         .then(res => {
//             expect(res.statusCode).toEqual(403)
//             expect(res.body.errors.password).toBe("Senha incorreta")
//         })
//         .catch(err => {
//             throw err
//         })
//     })

// })