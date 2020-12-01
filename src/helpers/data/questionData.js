import axios from 'axios';

const baseUrl = 'https://prept-886c6.firebaseio.com';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/questions.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

export default { getQuestions };
