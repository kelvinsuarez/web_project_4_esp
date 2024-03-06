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
            pic: this._dataPic.getAttribute('src')
        };
    }

    setUserInfo({name, job, pic}) {
        if (name)  this._dataName.textContent = name;
        if (job)  this._dataJob.textContent = job;
        if (pic)  this._dataPic.setAttribute('src', pic)
    }
}