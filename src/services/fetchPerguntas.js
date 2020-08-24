
// const token = localStorage.getItem('token')
const APIurl = `https://opentdb.com/api.php?amount=5&token=7c2557b297967333a2442fd403acc268d9e9ddbe82e72f7c352f33355dd80769`

const fetchAPIperguntas = () => (
    fetch(APIurl)
      .then((response) => (
          response
          .json()
          .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
      ))
);

export default fetchAPIperguntas;