export const BASE_URL = 'http://jsonplaceholder.typicode.com';

const checkAnswerCorrectness = (response) => {
    if (response.ok) {
      return response.json();
    } 
    return Promise.reject(`Ошибка ${response.status}`)
};

export const getInitialTodos = () => {
  return fetch(`${BASE_URL}/todos`)
  .then(response => checkAnswerCorrectness(response))
}
export const getInitialUser = () => {
  return fetch(`${BASE_URL}/users`)
  .then(response => checkAnswerCorrectness(response))
}
