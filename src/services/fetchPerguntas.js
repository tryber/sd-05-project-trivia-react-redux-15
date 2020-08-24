
// const token = localStorage.getItem('token')
const APIurl = `https://opentdb.com/api.php?amount=5&token=533bc1c2853db93f2aec28599ad24b29ffc50085c9a50a3a4fb4b6834ec68567`

const fetchAPIperguntas = () => (
    fetch(APIurl)
      .then((response) => (
          response
          .json()
          .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
      ))
);

export default fetchAPIperguntas;