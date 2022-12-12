export const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const checkSuccess = (res) => {
  if (res && res.success) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse, checkSuccess);
};

export const ingredientsId = [
  "60d3b41abdacab0026a733c6",
  "60d3b41abdacab0026a733c7",
  "60d3b41abdacab0026a733c8",
  "60d3b41abdacab0026a733c9",
  "60d3b41abdacab0026a733ca",
  "60d3b41abdacab0026a733cb",
  "60d3b41abdacab0026a733cc",
  "60d3b41abdacab0026a733cd",
  "60d3b41abdacab0026a733ce",
  "60d3b41abdacab0026a733cf",
  "60d3b41abdacab0026a733d0",
  "60d3b41abdacab0026a733d1",
  "60d3b41abdacab0026a733d2",
  "60d3b41abdacab0026a733d3",
  "60d3b41abdacab0026a733d4"
]
