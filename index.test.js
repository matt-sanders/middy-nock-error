import nock from "nock"
import { handler, middyHandler } from "./"

describe("Handlers", () => {
  const s = nock("https://test.com/")
    .get("/foo-bar")
    .reply(200, { foo: "bar" })

  it("passes the handler function without error", async () => {
    const output = await handler() 
    expect(output).toEqual({ foo: "bar" })
  })

  it("fails when wrapped with middy", async () => {
    const output = await middyHandler()
    expect(output).toEqual({ foo: "bar2"})
  })
})
