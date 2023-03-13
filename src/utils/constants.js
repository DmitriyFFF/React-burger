export const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const request = async (url, options) => {
  return fetch(url, options).then(checkResponse).then(checkSuccess);
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

export function setCookie(name, value, props) {//тренажер
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export function getCookie(name) {//тренажер
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function deleteCookie(name) {
    // Находим куку по ключу token, удаляем её значение,
    // устанавливаем отрицательное время жизни, чтобы удалить сам ключ token
  setCookie(name, null, { expires: -1 });
};
