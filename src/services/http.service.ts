import axios from "axios";

export type MethodRequest = "GET" | "POST" | "PUT" | "DELETE";

export function HttpService(router: string, method: MethodRequest, data?: any){
    const baseUrl = `http://localhost:4000/${router}`

    return axios({
        url: baseUrl,
        method: method,
        data: data,
    })
}