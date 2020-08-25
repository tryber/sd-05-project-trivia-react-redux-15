const token = localStorage.getItem('token');
const APIurl = `https://opentdb.com/api.php?amount=5&token=${token}`;

const fetchAPIperguntas = () => (
  fetch(APIurl)
  .then((response) => (
    response
    .json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
  ))
);

export default fetchAPIperguntas;
