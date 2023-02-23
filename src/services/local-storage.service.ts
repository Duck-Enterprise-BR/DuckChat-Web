export class StorageService{
    save(key: string, value: string){
        localStorage.setItem(key, value);
    }

    get(key: string){
        return JSON.parse(localStorage.get(key));
    }
}