import axios from 'axios';

const baseUrl = 'https://prept-886c6.firebaseio.com';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/questions.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const createQuestion = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/questions.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/questions/${response.data.name}.json`, update)
        .then(() => {
          resolve(response);
        });
    }).catch((error) => reject(error));
});

export default { getQuestions, createQuestion };
