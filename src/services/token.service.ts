export class TokenService{
    private accessTokenKey = "accessToken";

    save(token: string){
        localStorage.setItem(this.accessTokenKey, token);
    }

    get(){
        return JSON.parse(localStorage.getItem(this.accessTokenKey) ?? "");
    }
}