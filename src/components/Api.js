export class Api {
  constructor(setting) {
    this.baseUrl = setting.baseUrl;
    this.headers = setting.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return response.json()
    })
    .catch((err) => {
      console.log(err);
    })
  }


  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return response.json()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateProfile(name, profession){
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: profession
      })
    })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return response.json()
    })
    .catch((err) => {
      console.log(err);
     })
  }
}
