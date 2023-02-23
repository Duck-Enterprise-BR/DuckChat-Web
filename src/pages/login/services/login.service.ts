import { HttpService } from "../../../services/http.service";

export async function LoginService(email: string, password: string){
    return <any> await HttpService("auth/login", "POST", {
        email,
        password
    })
}