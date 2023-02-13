
export class UserInfo{
  constructor(nameSelector, professionSelector){
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
  }

  getUserInfo() {
    let userInfo = {};
    userInfo.name = this._profileName.textContent;
    userInfo.profession = this._profileProfession.textContent;
    return userInfo;
  }

  setUserInfo(inputName, InputProfession){
    this._profileName.textContent = inputName;
    this._profileProfession.textContent = InputProfession;
  }
}
