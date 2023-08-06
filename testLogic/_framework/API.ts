import axios from "axios";

export class API {
    async get(url: string) {      
        try {
            let response = await axios.get(url)
            return response
          } catch (error) {
            console.error('ERROR: '+url+ '\n'+error)
            return error
          }
    }

    async post(url: string, payload: any){
      try{
        let response = axios.post(url, payload)
        return response
      }catch (error) {
        console.error('ERROR: '+url+ '\n'+error)
        return error
      }
    }

    async put(url: string, payload: any){
      try{
        let response = axios.put(url, payload)
        return response
      }catch (error) {
        console.error('ERROR: '+url+ '\n'+error)
        return error
      }
    }

    async delete(url: string, payload: any){
      try {
        let response = axios.delete(url, payload)
        return response
      } catch (error) {
        console.error('ERROR: '+url+ '\n'+error)
        return error
      }
    }
}