export const BASE_URL = 'http://jsonplaceholder.typicode.com';

const checkAnswerCorrectness = (response) => {
    if (response.ok) {
      return response.json();
    } 
    return Promise.reject(`Ошибка ${response.status}`)
};

export const getInitialTodos = () => {
  return fetch(`${BASE_URL}/todos`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
  .then(response => checkAnswerCorrectness(response))
};

export const addCard = (data) => {
  return fetch(`${BASE_URL}/api/v1/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
        
    },
    body: JSON.stringify({
      title: data.title,
      message: data.message
    })
  })
  .then(response => checkAnswerCorrectness(response))
};

export const removeCard = (user_id) => {
  return fetch(`${BASE_URL}/api/v1/posts/${user_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
  })
  .then(response => checkAnswerCorrectness(response))
};