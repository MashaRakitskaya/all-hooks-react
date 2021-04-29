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


export const addTodos = (data) => {
  return fetch(`${BASE_URL}/todos`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      userId: 1111,
      title: data.title
    })
  })
  .then(response => checkAnswerCorrectness(response))
}

export const addUsers = (data) => {
  return fetch(`${BASE_URL}/users`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      userId: 111,
      name: data.name
    })
  })
  .then(response => checkAnswerCorrectness(response))
}



export const removeUser = (userId) => {
  return fetch(`${BASE_URL}/posts/${userId}`, {
      method: 'DELETE'
  })
  .then(response => checkAnswerCorrectness(response))
};