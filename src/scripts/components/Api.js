export default class Api{
    constructor(apiKey){
        this._authorization = apiKey;
    }

    async _useFetch(url, method, body){
        const res = await fetch(url, {
            headers: {
                authorization: this._authorization,
                "content-type": "application/json"
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

    async saveDataToServer(name, job) {
        try{
            const res = await this._useFetch(
                "https://around.nomoreparties.co/v1/web_es_11/users/me",
                "PATCH",
                {
                    name,
                    about: job,
                }
            );
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    async addNewCardToServer(name, link) {
        try {
            const res = await this._useFetch(
               "https://around.nomoreparties.co/v1/web_es_11/cards",
               "POST",
               {
                name: name,
                link: link,
               }
            );
            return res;
        } catch(err) {
            console.log(err);
        }
    }

    async showLikeFromCard(cardId) {
        try {
            const res = await this._useFetch(
                `https://around.nomoreparties.co/v1/web_es_11/cards/likes/${cardId}`,
                "PUT"
            );

            return res;
        } catch (err) {
            console.log(err);
        }
    }

    async deleteLikeFromCard(cardId){
        try {
            const res = await this._useFetch(
                `https://around.nomoreparties.co/v1/web_es_11/cards/likes/${cardId}`,
                "DELETE"
            );

            return res;
        } catch (err) {
            console.log(err);
        }
    }

    async deleteCardFromServer(cardId){
        try {
            const res = await this._useFetch(
                `https://around.nomoreparties.co/v1/web_es_11/cards/${cardId}`,
                "DELETE"
            );

            return res;
        } catch (err) {
            console.log (err);
        }
    }

    async updateImageProfile(avatarUrl) {
        try {
            const res = await this._useFetch(
                "https://around.nomoreparties.co/v1/web_es_11/users/me/avatar",
                "PATCH",
                {
                    avatar: avatarUrl,
                }
            );

            return res;
        } catch (err) {
            console.log(err);
        }
    }

}