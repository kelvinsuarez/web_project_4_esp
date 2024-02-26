export default class Api{
    constructor({apiKey}){
        this._authorization = apiKey;
    }

    async _useFetch(url, method, body){
        const res = await fetch(url, {
            headers: {
                authorization: this._authorization,
                "content-type": "aplication/json"
            },
            method,
            body: JSON.stringify(body)
        });

        if (res.ok){
            return res.json();
        }

        return Promise.reject(`Error ${res.status}`)
    }

    async getUserInfoFronServer() {
        try{
            const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_11/users/me",
            "GET"
            );
            return res;
        }catch(err) {
            console.log(err);
        }
    }

    async getCards(){
        try{
            const res = await this._useFetch("https://around.nomoreparties.co/v1/web_es_11/cards",
            "GET"
            );
            return res;
        }catch (err) {
            console.log(err);
        }
    }

}