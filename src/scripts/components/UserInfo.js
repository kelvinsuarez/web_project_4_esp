export default class UserInfo {
    constructor({dataName, dataJob, dataPic}){
        this._dataName = document.querySelector(dataName);
        this._dataJob = document.querySelector(dataJob);
        this._dataPic = document.querySelector(dataPic)
    }

    getUserInfo(){
        return {
            name: this._dataName.textContent,
            job: this._dataJob.textContent,
            avatar: this._dataPic.getAttribute('src')
        };
    }

    setUserInfo({name, job, avatar}) {
        if (name)  this._dataName.textContent = name;
        if (job)  this._dataJob.textContent = job;
        if (avatar)  this._dataPic.setAttribute('src', avatar)
    }
}