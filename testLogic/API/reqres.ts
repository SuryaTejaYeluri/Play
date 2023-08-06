import { API } from "../_framework/API";
import EndPoint from '../../resources/EndPoint.json'
import User from '../../resources/payload/User.json'
import { Utility } from '../_framework/Utility'

const util = new Utility()
const call = new API()

export class reqres extends API{
    async formRequestURL(urlTemplate: string, target: string, replacement: string){
        return urlTemplate.replace(target, replacement)        
    }
    
    async getUserList() {        
        const response = await call.get(EndPoint.ListUsers)
        return response
    }

    async getUser(userID: any) {   
        const url = this.formRequestURL(EndPoint.SingleUser, '<userID>', userID)     
        const response = await call.get((await url).toString())
        return response
    }

    async postUser() {        
        const uniqueName = Utility.generateRandomName()
        User.Create.name = (await uniqueName).toString()

        const response = await call.post(EndPoint.CreateUser, User.Create)
        return response
    }

    async updateUser() {
        User.Create.job = 'zion resident'
        const response = await call.put(EndPoint.UpdateUser, User.Create)
        return response
    }
}