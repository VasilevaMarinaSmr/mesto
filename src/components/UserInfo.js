export class UserInfo {
  constructor(nameSelector, professionSelector, avatarSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._profileName.textContent;
    userInfo.profession = this._profileProfession.textContent;
    return userInfo;
  }

  setUserInfo(inputName, inputProfession, inputAvatar) {
    this._profileName.textContent = inputName;
    this._profileProfession.textContent = inputProfession;
    this._profileAvatar.src = inputAvatar;
  }
}
