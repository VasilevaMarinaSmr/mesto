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

  createCard(cardProperties) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: cardProperties.name,
        link: cardProperties.link
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

  addLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
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

  removeLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers
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
