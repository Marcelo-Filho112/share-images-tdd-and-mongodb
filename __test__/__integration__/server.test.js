import request from "supertest"
import { test, expect, describe } from "vitest"
import app from "../../src/app"

describe("App", () => {
    test("deve responder na porta 3131", async () => {
      const res = await request(app).get("/")
      expect(res.statusCode).toBe(200)
    })
  })