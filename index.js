import middy from "@middy/core"
import axios from "axios"

export const handler = async () => {
  const response = await axios.get("https://test.com/foo-bar")
  return response.data
}

export const middyHandler = middy(async () => {
  const response = await axios.get("https://test.com/foo-bar")
  return response.data
})