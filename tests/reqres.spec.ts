import {test, expect} from '@playwright/test'
import { reqres } from "../testLogic/API/reqres"

const call = new reqres()

test("reqres-> Get_UserList @positive", async function() {    
    const response = await call.getUserList()
    console.log("Get User List: Status " + response.status)
    expect(response.status).toBe(200);
})

test("reqres-> Post_User @positive", async function() {
    let response = await call.postUser()
    console.log("Post User: Status " + response.status)
    expect(response.status).toBe(201)
    console.log("Post User Name: "+ response.data.name)

})

test("reqres-> Get_User @positive", async function() {
    const response = await call.getUser('2')
    console.log("Get User: Status " + response.status)
    expect(response.status).toBe(200)
})

test("reqres-> Put_User @positive", async function() {
    const response = await call.updateUser()
    console.log("Get User: Status " + response.status)
    expect(response.status).toBe(200)
    console.log("Updated User Job: " + response.data.job)
})

