export default class UserInfo {
    constructor({dataName, dataJob}){
        this._dataName = document.querySelector(dataName);
        this._dataJob = document.querySelector(dataJob)
    }

    getUserInfo(){
        return {
            name: this._dataName.textContent,
            job: this._dataJob.textContent
        };
    }

    setUserInfo({name, job}) {
if (name)  this._dataName.textContent = name;
 
if (job)  this._dataJob.textContent = job;}
    
}